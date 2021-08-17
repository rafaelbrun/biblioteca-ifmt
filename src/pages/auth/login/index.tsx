import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import AppStatusBar from '../../../components/AppStatusBar';
import { TextInput } from 'react-native-gesture-handler';

export default function Login() {
	const navigation = useNavigation();
	const [matricula, setMatricula] = useState("");
	const [senha, setSenha] = useState("");

	return (
		<View style={styles.container}>
			<AppStatusBar></AppStatusBar>
			<ScrollView>
				<View style={styles.body}>
					<Text>Biblioteca IFMT</Text>
					<View style={styles.inputContainer}>
						<View style={styles.fieldInput}>
							<Text>Nº de matrícula</Text>
							<TextInput keyboardType='numeric' autoCapitalize='none' style={styles.textInput}
								onChangeText={inputMatricula => setMatricula(inputMatricula)} ></TextInput>
						</View>
						<View style={styles.fieldInput}>
							<Text>Senha</Text>
							<TextInput secureTextEntry={true} onChangeText={inputSenha => setSenha(inputSenha)}
								autoCapitalize='none' style={styles.textInput}></TextInput>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.footer}>
				<Text>Problemas em logar?</Text>
				<Text>Entre em contato com o IFMT</Text>
			</View>
		</View>
	);
}