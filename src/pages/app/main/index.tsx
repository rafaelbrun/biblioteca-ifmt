import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
import { darkBlue } from 'src/pages/geral/styles';
import { criarInteresse, realizarReserva } from 'src/services/discente-service';
import { getAllExemplares } from 'src/services/exemplares-service';

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

  const handlePressExemplar = useCallback(
    (index: number): void => {
      setExemplarSelect(exemplares[index]);
      setModalVisible(!modalVisible);
    },
    [exemplares, modalVisible],
  );

  const filterExemplares = useCallback(
    (text: string): IExemplar[] => {
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
    },
    [exemplares],
  );

  const handlePesquisar = useCallback(
    (text: string): void => {
      if (text === '') {
        setExemplaresFiltered(exemplares);
        return;
      }
      setIsLoadingSearch(true);
      setTimeout(() => {
        setExemplaresFiltered(filterExemplares(text));
        setIsLoadingSearch(false);
      }, 500);
    },
    [exemplares, filterExemplares],
  );

  const handleReservar = useCallback(async (): Promise<void> => {
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
  }, [exemplarSelect.id, user.id, modalVisible]);

  const handleClearSearch = useCallback((): void => {
    setFilterText('');
    handlePesquisar('');
  }, [handlePesquisar]);

  const handleCriarInteresse = useCallback(async () => {
    const resp = await criarInteresse(user.id, exemplarSelect.id);
    if (resp.data.success) {
      Alert.alert(
        'Sucesso',
        `Você criou interesse no livro ${exemplarSelect.titulo}`,
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
    } else {
      Alert.alert(
        'Interesse',
        `${resp.data.error}`,
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
    }
  }, [exemplarSelect.id, exemplarSelect.titulo, modalVisible, user.id]);

  const renderMapExemplares = useMemo((): JSX.Element[] => {
    return exemplaresFiltered.map((item: IExemplar, key: number) => {
      return (
        <View key={key}>
          <TouchableOpacity
            key={key}
            style={styles.itemContainer}
            onPress={() => handlePressExemplar(key)}
          >
            <Text
              style={[
                styles.exemplarTitulo,
                !item.disponivel && styles.disabledText,
              ]}
            >
              {item.titulo}
            </Text>
            <Text style={[!item.disponivel && styles.disabledText]}>
              {item.autor}
            </Text>
          </TouchableOpacity>
          {key < exemplaresFiltered.length - 1 && (
            <View style={styles.divider} />
          )}
        </View>
      );
    });
  }, [exemplaresFiltered, handlePressExemplar]);

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
                  onPress={handleCriarInteresse}
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
          {filterText !== '' && (
            <Feather
              color={'red'}
              name={'x'}
              size={18}
              style={styles.marginInput}
              onPress={handleClearSearch}
            />
          )}
        </View>
      </View>
      {!isLoadingSearch && !isLoading ? (
        exemplaresFiltered.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.listContainer}
          >
            {renderMapExemplares}
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
