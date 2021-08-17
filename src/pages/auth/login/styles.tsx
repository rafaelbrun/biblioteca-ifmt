import { StyleSheet } from 'react-native';
import { lightBlue, gray, skyBlue } from '../../geral/styles'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightBlue
    },
    body: {
        height: "70%",
        width: "100%",
        alignItems: 'center',
        padding: 4,
    },
    inputContainer: {
        paddingTop: 24,
        width: "80%",
        paddingHorizontal: 12,
        marginHorizontal: 24
    },
    fieldInput: {
        marginBottom: 12
    },
    textInput: {
        borderRadius: 2,
        backgroundColor: skyBlue,
        fontSize: 20,
        padding: 8
    },
    footer: {
        height: 100,
        justifyContent: 'center',
        marginHorizontal: 24
    }
});