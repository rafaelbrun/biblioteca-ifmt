import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, ActivityIndicator } from 'react-native';
import styles from './styles';
import AppStatusBar from '../../../components/AppStatusBar';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { AntDesign, Feather } from '@expo/vector-icons';
import { IExemplar } from '../../../interfaces/IExemplar';
import { darkBlue, lightBlue, skyBlue } from '../../geral/styles';

export default function Main() {

	const [exemplarSelect, setExemplarSelect] = useState({} as IExemplar);
	const [isLoading, setIsLoading] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [exemplaresFiltered, setExemplaresFiltered] = useState([{}] as IExemplar[]);

	const exemplares: IExemplar[] = [
		{
			id: 1,
			disponivel: true,
			autor: 'Silvio Cesar Roxo Giavaroto',
			edicao: '1ª',
			editora: 'Ciência Moderna',
			titulo: 'Kali Linux. Introdução ao Penetration Testing'
		},
		{
			id: 2,
			disponivel: false,
			autor: 'Robert C. Martin',
			edicao: '1ª',
			editora: 'Alta Books',
			titulo: 'Código limpo: Habilidades práticas do Agile Software'
		},
		{
			id: 3,
			disponivel: true,
			autor: 'Celmo Celeno PORTO',
			edicao: '8ª',
			editora: 'Guanabara Koogan',
			titulo: 'Semiologia Médica'
		},
		{
			id: 4,
			disponivel: false,
			autor: 'Maurice Leblanc',
			edicao: '1ª',
			editora: 'Pandorga Editora',
			titulo: 'Arsène Lupin: O Ladrão de Casaca'
		},
		{
			id: 5,
			disponivel: true,
			autor: 'Rafael',
			edicao: '31ª',
			editora: 'Editora Saraiva',
			titulo: 'Vade Mecum Saraiva Tradicional'
		},
		{
			id: 6,
			disponivel: true,
			autor: 'Guaracy Moreira Filho',
			edicao: '11ª',
			editora: 'Rideel',
			titulo: 'Código Penal Comentado'
		},
		{
			id: 7,
			disponivel: false,
			autor: 'Carol H. Collins',
			edicao: '1ª',
			editora: 'Editora da Unicamp',
			titulo: 'Fundamentos de Cromatografia'
		},
		{
			id: 8,
			disponivel: true,
			autor: 'Angelo Machado',
			edicao: '3ª',
			editora: 'Editora Atheneu',
			titulo: 'Neuroanatomia funcional'
		},
		{
			id: 9,
			disponivel: true,
			autor: 'Ilana Zeitoune ',
			edicao: '1ª',
			editora: 'Editora Forense',
			titulo: 'Petróleo e Gás no Brasil - Regulação da Exploração e da Produção'
		},
		{
			id: 10,
			disponivel: true,
			autor: 'Orlando Gomes',
			edicao: '22º',
			editora: 'Editora Forense',
			titulo: 'Introdução ao Direito Civil'
		},
		{
			id: 11,
			disponivel: true,
			autor: 'Trevos Kletz',
			edicao: '5ª',
			editora: 'Interciência',
			titulo: 'O que Houve de Errado?'
		},
		{
			id: 1,
			disponivel: true,
			autor: 'José Hernandez Perez Júnior',
			edicao: '11ª',
			editora: 'Atlas',
			titulo: 'Controladoria Estratégica: Textos E Casos Práticos Com Solução'
		},
		{
			id: 13,
			disponivel: true,
			autor: 'Mathias Jr. Wilson',
			edicao: '1ª',
			editora: 'Editora Manole',
			titulo: 'Mathias - ecocardiografia para o dia a dia'
		},
	]

	function handlePressExemplar(index: number) {
		setExemplarSelect(exemplares[index]);
		setModalVisible(!modalVisible);
	}

	function handlePesquisar(text: string) {
		setIsLoading(true);
		setTimeout(() => {
			setExemplaresFiltered(filterExemplares(text));
			setIsLoading(false);
		}, 300);
	}

	function filterExemplares(text: string) {
		const textLower = text.toLowerCase();
		return exemplares.filter(exemplar => {
			return exemplar.autor.toLowerCase().includes(textLower) || exemplar.titulo.toLowerCase().includes(textLower)
		});
	}

	useEffect(() => {
		setExemplaresFiltered(exemplares);
	}, []);

	return (
		<View style={styles.container}>
			<AppStatusBar></AppStatusBar>
			<Modal animationType="fade" transparent={true} visible={modalVisible}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TouchableOpacity style={styles.buttonClose} onPress={() => { setModalVisible(!modalVisible) }}>
							<Feather name="x-circle" size={32} color={darkBlue} />
						</TouchableOpacity>
						<View>
							<View style={[styles.textContainer, styles.marginBottom]}>
								<Feather name={exemplarSelect.disponivel ? 'check' : 'x'} size={26}
									color={exemplarSelect.disponivel ? 'green' : 'red'} />
								<Text style={[styles.modalTextTitle, styles.disponibilidadeText]}>{exemplarSelect.disponivel ? 'DISPONÍVEL' : 'INDISPONÍVEL'}</Text>
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
						</View>
						<View style={styles.buttonsContainer}>
							{!exemplarSelect.disponivel ?
								<TouchableOpacity style={[styles.button, styles.buttonDarkBlue]} onPress={() => setModalVisible(!modalVisible)}>
									<Text style={styles.textStyle}>Criar Alerta</Text>
								</TouchableOpacity>
								:
								<TouchableOpacity style={[styles.button, styles.buttonSkyBlue]} onPress={() => setModalVisible(!modalVisible)}>
									<Text style={styles.textStyle}>Reservar</Text>
								</TouchableOpacity>
							}
						</View>
					</View>
				</View>
			</Modal>
			<View style={styles.inputContainer}>
				<View style={styles.inputField}>
					<AntDesign style={styles.inputText} name="search1" size={24} color="black" />
					<TextInput style={[styles.inputText, styles.fullWidth]} onChangeText={text => { handlePesquisar(text) }}
						placeholder="Pesquisar livro"></TextInput>
					<AntDesign style={styles.inputText} name="arrowright" size={24} color={skyBlue} />
				</View>
			</View>
			<View style={styles.listContainer}>
				{!isLoading ?
					<ScrollView showsVerticalScrollIndicator={false}>
						{exemplaresFiltered.map((item: IExemplar, key: number) => {
							if (item.disponivel) {
								return (
									<TouchableOpacity key={key} onPress={() => handlePressExemplar(key)} style={styles.itemContainer}>
										<Text style={styles.exemplarTitulo}>{item.titulo}</Text>
										<Text>{item.autor}</Text>
									</TouchableOpacity>
								);
							} else {
								return (
									<TouchableOpacity key={key} onPress={() => handlePressExemplar(key)} style={styles.itemContainer}>
										<Text style={[styles.exemplarTitulo, styles.disabledText]}>{item.titulo}</Text>
										<Text style={styles.disabledText}>{item.autor}</Text>
									</TouchableOpacity>
								);
							}
						})}
					</ScrollView>
					:
					<View style={styles.loaderContainer}>
						<ActivityIndicator></ActivityIndicator>
					</View>}
			</View>
		</View>
	);
}