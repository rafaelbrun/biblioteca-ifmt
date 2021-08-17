import { StyleSheet } from 'react-native';
import { lightBlue, gray, skyBlue } from '../../geral/styles'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightBlue
    },
    body: {
        height: "70%",
        alignItems: 'center',
        padding: 4,
    },
    card: {
        width: "90%",
        height: 150,
        backgroundColor: gray,
        marginVertical: 12,
        borderRadius: 5,
        padding: 12
    },
    valorTotal: {
        fontSize: 30,
        fontWeight: 'bold',
        color: lightBlue
    },
    valorParcelado: {
        fontSize: 20,
        color: lightBlue
    },
    tipoPlano: {
        marginStart: 12,
        fontSize: 20,
        color: lightBlue,
        fontWeight: 'bold'
    },
    descricaoPlano: {
        marginStart: 12,
        fontSize: 14,
        color: lightBlue
    },
    footer: {
        height: 100,
        justifyContent: 'center',
        marginHorizontal: 24
    },
    textoConta: {
        marginTop: 12,
        textDecorationLine: 'underline',
    }
});