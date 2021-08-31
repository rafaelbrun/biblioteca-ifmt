import { StyleSheet } from 'react-native';
import { lightBlue } from '../../geral/styles'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightBlue,
    },
    body: {
        backgroundColor: 'white',
        height: '43%',
        marginBottom: 12
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        padding: 10,
    },
    titleText: {
        fontSize: 18,
        letterSpacing: 1.5
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    exemplarContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%'
    },
    titleExemplar: {
        fontSize: 16,
        flexWrap: 'wrap',
        letterSpacing: 0.5
    },
    autorExemplar: {
        fontSize: 12,
        color: '#aaa',
        letterSpacing: 1
    },
    removeButtonContainer: { 
        padding: 4
    },
    titleNotificao: {
        letterSpacing: .5
    },
    dataNotificao: {
        fontSize: 12,
        color: '#aaa',
        letterSpacing: 1
    },
    divisor: {
        width: '95%',
        alignSelf: 'center',
        height: 1,
        borderBottomWidth: 1,
        borderColor: '#efefef'
    }
});