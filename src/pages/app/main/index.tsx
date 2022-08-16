import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { AntDesign, Feather } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import AppStatusBar from 'src/components/AppStatusBar';
import { useAuth } from 'src/contexts/auth';
import { IExemplar } from 'src/interfaces/IExemplar';
import { darkBlue, skyBlue } from 'src/pages/geral/styles';
import {
  realizarReserva,
  getAllExemplares,
} from 'src/services/exemplares-service';

import styles from './styles';

const Main: React.FC = () => {
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

  const handlePressExemplar = (index: number): void => {
    setExemplarSelect(exemplares[index]);
    setModalVisible(!modalVisible);
  };

  const handlePesquisar = (text: string): void => {
    if (text === '') {
      setExemplaresFiltered(exemplares);
      return;
    }
    setIsLoadingSearch(true);
    setTimeout(() => {
      setExemplaresFiltered(filterExemplares(text));
      setIsLoadingSearch(false);
    }, 500);
  };

  const handleReservar = async (): Promise<void> => {
    const resp = (await realizarReserva(user.id, exemplarSelect.id)).data;
    let message = 'Reserva realizada com sucesso';

    if (!resp.success) {
      message = resp.error;
    }

    Alert.alert(
      'Reserva',
      message,
      [
        {
          onPress: () => {
            setModalVisible(!modalVisible);
          },
          text: 'Ok',
        },
      ],
      { cancelable: false },
    );
  };

  const filterExemplares = (text: string): IExemplar[] => {
    const textLower = text.toLowerCase();
    const filteredList = exemplares.filter((exemplar) => {
      return (
        exemplar.autor.toLowerCase().includes(textLower) ||
        exemplar.titulo.toLowerCase().includes(textLower)
      );
    });
    if (filteredList.length === 0) {
      setInfoMessage('Nenhum exemplar encontrado.');
    }
    return filteredList;
  };

  const handleClearSearch = (): void => {
    setFilterText('');
    handlePesquisar('');
  };

  const renderMapExemplares = (): JSX.Element[] => {
    return exemplaresFiltered.map((item: IExemplar, key: number) => {
      if (item.disponivel) {
        return (
          <View key={key}>
            <TouchableOpacity
              key={key}
              style={styles.itemContainer}
              onPress={() => handlePressExemplar(key)}
            >
              <Text style={styles.exemplarTitulo}>{item.titulo}</Text>
              <Text>{item.autor}</Text>
            </TouchableOpacity>
          </View>
        );
      }
      return (
        <View key={key}>
          <TouchableOpacity
            key={key}
            style={styles.itemContainer}
            onPress={() => handlePressExemplar(key)}
          >
            <Text style={[styles.exemplarTitulo, styles.disabledText]}>
              {item.titulo}
            </Text>
            <Text style={styles.disabledText}>{item.autor}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <AppStatusBar />
      <Modal animationType={'fade'} transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Feather color={darkBlue} name={'x-circle'} size={32} />
            </TouchableOpacity>
            <View>
              <View style={[styles.textContainer, styles.marginBottom]}>
                <Feather
                  color={exemplarSelect.disponivel ? 'green' : 'red'}
                  name={exemplarSelect.disponivel ? 'check' : 'x'}
                  size={26}
                />
                <Text
                  style={[styles.modalTextTitle, styles.disponibilidadeText]}
                >
                  {exemplarSelect.disponivel ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>{'Título'}</Text>
                <Text style={styles.modalText}>{exemplarSelect.titulo}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>{'Autor'}</Text>
                <Text style={styles.modalText}>{exemplarSelect.autor}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>{'Edição'}</Text>
                <Text style={styles.modalText}>{exemplarSelect.edicao}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>{'Editora'}</Text>
                <Text style={styles.modalText}>{exemplarSelect.editora}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.modalTextTitle}>{'Estoque'}</Text>
                <Text style={styles.modalText}>
                  {`${exemplarSelect.estoque} unidades`}
                </Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              {!exemplarSelect.disponivel ? (
                <TouchableOpacity
                  style={[styles.button, styles.buttonDarkBlue]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>{'Criar Interesse'}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[styles.button, styles.buttonSkyBlue]}
                  onPress={handleReservar}
                >
                  <Text style={styles.textStyle}>{'Reservar'}</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <AntDesign
            color={'black'}
            name={'search1'}
            size={24}
            style={styles.marginInput}
          />
          <TextInput
            placeholder={'Pesquisar livro'}
            style={[styles.marginInput, styles.fullWidth]}
            value={filterText}
            onChangeText={(text) => {
              setFilterText(text);
            }}
            onSubmitEditing={() => handlePesquisar(filterText)}
          />
          {filterText !== '' ? (
            <Feather
              color={'red'}
              name={'x'}
              size={18}
              style={styles.marginInput}
              onPress={handleClearSearch}
            />
          ) : (
            <View />
          )}
          <AntDesign
            color={skyBlue}
            name={'arrowright'}
            size={24}
            style={styles.marginInput}
            onPress={() => {
              handlePesquisar(filterText);
            }}
          />
        </View>
      </View>
      {!isLoadingSearch && !isLoading ? (
        exemplaresFiltered.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.listContainer}
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
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};

export default Main;
