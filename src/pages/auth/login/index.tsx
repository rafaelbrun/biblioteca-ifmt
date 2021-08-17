import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function Login() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<ScrollView>
				<View style={styles.body}>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 12 }}>
							<Text style={styles.valorTotal}>R$34,90</Text>
							<Text style={styles.valorParcelado}>x1 R$34,90</Text>
						</View>
						<Text style={styles.tipoPlano}>Plano Mensal</Text>
						<Text style={styles.descricaoPlano}>Tenha sua licença por um mês, podendo renovar a qualquer momento e sem cobranças automáticas!</Text>
					</View>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 12 }}>
							<Text style={styles.valorTotal}>R$89,70</Text>
							<Text style={styles.valorParcelado}>x3 R$29,90</Text>
						</View>
						<Text style={styles.tipoPlano}>Plano Trimestral</Text>
						<Text style={styles.descricaoPlano}>Tenha sua licença por três meses com valor parcelado sem juros e economize mais de 10% ao mês!</Text>
					</View>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 12 }}>
							<Text style={styles.valorTotal}>R$149,40</Text>
							<Text style={styles.valorParcelado}>x6 R$24,90</Text>
						</View>
						<Text style={styles.tipoPlano}>Plano Semestral</Text>
						<Text style={styles.descricaoPlano}>Tenha sua licença por seis meses com valor parcelado sem juros e economize  R$60,00!</Text>
					</View>
					<View style={styles.card}>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginStart: 12 }}>
							<Text style={styles.valorTotal}>R$238,80</Text>
							<Text style={styles.valorParcelado}>x12 R$19,90</Text>
						</View>
						<Text style={styles.tipoPlano}>Plano Anual</Text>
						<Text style={styles.descricaoPlano}>Tenha sua licença por um ano com valor parcelado sem juros e economize  R$120,00!</Text>
					</View>


				</View>
			</ScrollView>
			<View style={styles.footer}>
			</View>
		</View>
	);
}