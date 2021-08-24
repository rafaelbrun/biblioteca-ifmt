import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import AppStatusBar from '../../../components/AppStatusBar';
import { useAuth } from '../../../contexts/auth';

export default function Profile() {
	
	const { signOut } = useAuth();

	function handleDeslogar() {
		signOut();
	}

	return (
		<View style={styles.container}>
			<AppStatusBar></AppStatusBar>
			<Text>Profile</Text>
			<Button title="deslogar" onPress={handleDeslogar}></Button>
		</View>
	);
}