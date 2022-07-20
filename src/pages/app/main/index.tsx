import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import styles from './styles';
import AppStatusBar from '../../../components/AppStatusBar';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { AntDesign, Feather } from '@expo/vector-icons';
import { IExemplar } from '../../../interfaces/IExemplar';
import { darkBlue, skyBlue } from '../../geral/styles';
import {
  getAllExemplares,
  realizarReserva,
} from '../../../services/exemplares-service';
import { useAuth } from '../../../contexts/auth';

export default function Main() {
  const { user } = useAuth();

  const [exemplares, setExemplares] = useState([] as IExemplar[]);
  const [exemplaresFiltered, setExemplaresFiltered] = useState(
    [] as IExemplar[],
  );
  const [exemplarSelect, setExemplarSelect] = useState({} as IExemplar);

  const [filterText, setFilterText] = useState('');
  const [infoMessage, setInfoMessage] = useState('Sem exemplares para exibir.');

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function handlePressExemplar(index: number) {
    setExemplarSelect(exemplares[index]);
    setModalVisible(!modalVisible);
  }

  function handlePesquisar(text: string) {
    if (text == '') {
      setExemplaresFiltered(exemplares);
      return;
    }
    setIsLoadingSearch(true);
    setTimeout(() => {
      setExemplaresFiltered(filterExemplares(text));
      setIsLoadingSearch(false);
    }, 500);
  }

  async function handleReservar() {
    const resp = (await realizarReserva(user.id, exemplarSelect.id)).data;
    var message = 'Reserva realizada com sucesso';

    console.log(resp);

    if (!resp.success) {
      message = resp.error;
    }

    Alert.alert(
      'Reserva',
      message,
      [
        {
          text: 'Ok',
          onPress: () => {
            setModalVisible(!modalVisible);
          },
        },
      ],
      { cancelable: false },
    );
  }

  function filterExemplares(text: string): IExemplar[] {
    const textLower = text.toLowerCase();
    const filteredList = exemplares.filter((exemplar) => {
      return (
        exemplar.autor.toLowerCase().includes(textLower) ||
        exemplar.titulo.toLowerCase().includes(textLower)
      );
    });
    if (filteredList.length == 0) {
      setInfoMessage('Nenhum exemplar encontrado.');
    }
    return filteredList;
  }

  function handleClearSearch() {
    setFilterText('');
    handlePesquisar('');
  }

  function renderMapExemplares() {
    return exemplaresFiltered.map((item: IExemplar, key: number) => {
      if (item.disponivel) {
        return (
          <View>
            <TouchableOpacity
              key={key}
              onPress={() => handlePressExemplar(key)}
              style={styles.itemContainer}
            >
              <Text style={styles.exemplarTitulo}>{item.titulo}</Text>
              <Text>{item.autor}</Text>
            </TouchableOpacity>
          </View>
        );
      }
      return (
        <View>
          <TouchableOpacity
            key={key}
            onPress={() => handlePressExemplar(key)}
            style={styles.itemContainer}
          >
            <Text style={[styles.exemplarTitulo, styles.disabledText]}>
              {item.titulo}
            </Text>
            <Text style={styles.disabledText}>{item.autor}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = (await getAllExemplares()).data;
      if (response.success) {
        setExemplares(response.data);
        setExemplaresFiltered(exemplares);
      } else {
        Alert.alert('ERRO', 'O sistema está indisponível');
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <AppStatusBar></AppStatusBar>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Feather name="x-circle" size={32} color={darkBlue} />
            </TouchableOpacity>
            <View>
              <View style={[styles.textContainer, styles.marginBottom]}>
                <Feather
                  name={exemplarSelect.disponivel ? 'check' : 'x'}
                  size={26}
                  color={exemplarSelect.disponivel ? 'green' : 'red'}
                />
                <Text
                  style={[styles.modalTextTitle, styles.disponibilidadeText]}
                >
                  {exemplarSelect.disponivel ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>Título </Text>
                <Text style={styles.modalText}>{exemplarSelect.titulo}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>Autor </Text>
                <Text style={styles.modalText}>{exemplarSelect.autor}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>Edição </Text>
                <Text style={styles.modalText}>{exemplarSelect.edicao}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>Editora </Text>
                <Text style={styles.modalText}>{exemplarSelect.editora}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>Estoque </Text>
                <Text style={styles.modalText}>
                  {exemplarSelect.estoque} unidades
                </Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              {!exemplarSelect.disponivel ? (
                <TouchableOpacity
                  style={[styles.button, styles.buttonDarkBlue]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Criar Interesse</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[styles.button, styles.buttonSkyBlue]}
                  onPress={handleReservar}
                >
                  <Text style={styles.textStyle}>Reservar</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <AntDesign
            style={styles.marginInput}
            name="search1"
            size={24}
            color="black"
          />
          <TextInput
            style={[styles.marginInput, styles.fullWidth]}
            onSubmitEditing={() => handlePesquisar(filterText)}
            onChangeText={(text) => {
              setFilterText(text);
            }}
            placeholder="Pesquisar livro"
            value={filterText}
          />
          {filterText != '' ? (
            <Feather
              onPress={handleClearSearch}
              style={styles.marginInput}
              name="x"
              size={18}
              color="red"
            />
          ) : (
            <View></View>
          )}
          <AntDesign
            style={styles.marginInput}
            name="arrowright"
            size={24}
            color={skyBlue}
            onPress={() => {
              handlePesquisar(filterText);
            }}
          />
        </View>
      </View>
      {!isLoadingSearch && !isLoading ? (
        exemplaresFiltered.length > 0 ? (
          <ScrollView
            style={styles.listContainer}
            showsVerticalScrollIndicator={false}
          >
            {renderMapExemplares()}
          </ScrollView>
        ) : (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{infoMessage}</Text>
          </View>
        )
      ) : (
        <View style={styles.loaderContainer}>
          <ActivityIndicator></ActivityIndicator>
        </View>
      )}
    </View>
  );
}
