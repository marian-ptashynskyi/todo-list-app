import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        borderColor: '#dedede',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#eee',
        shadowOffset: {width: 2, height: 2},
        alignSelf: 'stretch',
        margin: 20,
        justifyContent: 'space-between',
    },
    taskText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 5,
        fontSize: 16,
        color: '#777',
    },
});