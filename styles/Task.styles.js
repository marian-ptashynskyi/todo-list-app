import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#dedede',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#eee',
        justifyContent: 'space-between',
    },
    taskText: {
        textAlign: 'left',
        textAlignVertical: 'center',
        width: '70%',
        fontSize: 16,
        color: '#777',
    },
    taskTextAndCheckbox: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    taskTextComplete: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    deleteButton: {
        alignSelf: 'center',
        padding: 10,
    },
});