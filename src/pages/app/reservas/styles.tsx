import { StyleSheet } from 'react-native';
import { lightBlue, gray } from '../../geral/styles'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightBlue,
    },
    body: {
        backgroundColor: 'white',
        height: '90%'
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16
    },
    itemText: {
        letterSpacing: 1.5,
        fontSize: 16
    },
    itemDateText: {
        marginLeft: 12,
        color: gray
    },
    divisor: {
        width: '95%',
        alignSelf: 'center',
        height: 1,
        borderBottomWidth: 1,
        borderColor: '#efefef'
    }
});