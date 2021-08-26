import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import AppStatusBar from '../../../components/AppStatusBar';
import { useAuth } from '../../../contexts/auth';
import { AntDesign, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

export default function Profile() {

	const { signOut, user } = useAuth();

	function handleDeslogar() {
		Alert.alert(
			'Sair',
			'Deseja deslogar?',
			[
				{
					text: 'Cancelar',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{
					text: 'OK', onPress: () => {
						signOut();
					}
				}
			],
			{ cancelable: false }
		);
	}

	return (
		<View style={styles.container}>
			<AppStatusBar></AppStatusBar>
			<View>
				<View style={styles.header}>
					<Text style={styles.userNome}>{user.nome} - {user.matricula}</Text>
				</View>
				<View style={styles.body}>
					<TouchableOpacity>
						<View style={styles.itemContainer}>
							<AntDesign name="book" size={20} color="black" />
							<Text style={styles.itemText}>Reservas</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.divisor}></View>
					<TouchableOpacity>
						<View style={styles.itemContainer}>
							<SimpleLineIcons name="exclamation" size={18} color="black" />
							<Text style={styles.itemText}>Alertas</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.divisor}></View>
					<TouchableOpacity>
						<View style={styles.itemContainer}>
							<MaterialIcons name="history" size={20} color="black" />
							<Text style={styles.itemText}>Histórico</Text>
						</View>
					</TouchableOpacity>
					<View style={styles.divisor}></View>
					<TouchableOpacity onPress={handleDeslogar}>
						<View style={styles.itemContainer}>
							<Ionicons name="ios-exit-outline" size={20} color="black" />
							<Text style={styles.itemText}>Sair</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}