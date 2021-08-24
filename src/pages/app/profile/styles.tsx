import { StyleSheet } from 'react-native';
import { blue, lightBlue, gray } from '../../geral/styles'

export default StyleSheet.create({
    logo: {
        resizeMode: "contain",
        width: 120,
        height: 120,
    },
    textoLogo: {
        color: blue,
        fontSize: 36,
        letterSpacing: 4
    },
    subTextoLogo: {
        color: blue,
        fontSize: 14,
        letterSpacing: 2
    },
    container: {
        flex: 1,
        backgroundColor: lightBlue,
    },
    textoMenu: {
        marginTop: 10,
        color: gray
    },
    layout: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 12
    },
    versionText: {
        color: "#D9DDDC",
        margin: 4,
    },
    textDownView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerGrid: {
        alignItems: 'center',
        margin: 0,
        padding: 0,
        marginTop: 12,
    },
    menuOp: {
        justifyContent: 'center',
        flex: 1,
    },
    imagem: {
        resizeMode: "contain",
        width: 60,
        height: 60,
    },
    gridMenu: {
        marginBottom: 60,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
});