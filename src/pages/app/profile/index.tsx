import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import AppStatusBar from '../../../components/AppStatusBar';
import { useAuth } from '../../../contexts/auth';
import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {

	const { signOut, user } = useAuth();
	const navigation = useNavigation();

	function handleDeslogar() {
		Alert.alert(
			'Sair',
			'Deseja deslogar?',
			[
				{
					text: 'Cancelar',
					style: 'cancel'
				},
				{
					text: 'Sim', onPress: () => {
						signOut();
					},
					style: 'destructive'
				}
			],
			{ cancelable: false }
		);
	}

	function navigateTo(route: any) {
		navigation.navigate(route);
	}

	return (
		<View style={styles.container}>
			<AppStatusBar></AppStatusBar>
			<View>
				<View style={styles.header}>
					<Text style={styles.userNome}>{user.nome} - {user.matricula}</Text>
				</View>
				<View style={styles.body}>
					<TouchableOpacity onPress={() => { navigateTo('Reservas') }}>
						<View style={styles.itemContainer}>
							<AntDesign name="book" size={20} color="black" />
							<Text style={styles.itemText}>Reservas</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.divisor}></View>
					<TouchableOpacity onPress={() => { navigateTo('Alertas') }}>
						<View style={styles.itemContainer}>
							<SimpleLineIcons name="exclamation" size={18} color="black" />
							<Text style={styles.itemText}>Alertas</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.divisor}></View>
					<TouchableOpacity onPress={() => { navigateTo('Configuracoes') }}>
						<View style={styles.itemContainer}>
							<Ionicons name="settings-outline" size={20	} color="black" />
							<Text style={styles.itemText}>Configurações</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.divisor}></View>
					<TouchableOpacity onPress={handleDeslogar}>
						<View style={styles.itemContainer}>
							<Ionicons name="ios-exit-outline" size={20} color="red" />
							<Text style={[styles.itemText, styles.redText]}>Sair</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}