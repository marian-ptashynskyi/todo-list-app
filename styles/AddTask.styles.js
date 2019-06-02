import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        borderColor: '#dedede',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#eee',
        shadowOffset: {width: 2, height: 2},
        alignSelf: 'stretch',
        marginVertical: 20,
        padding: 10,
        justifyContent: 'space-between',
    },
    taskText: {
        textAlign: 'left',
        textAlignVertical: 'center',
        paddingHorizontal: 5,
        fontSize: 16,
        color: '#777',
        width: '90%',
    },
});