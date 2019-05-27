import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';
import TaskList from './TaskList';
import AddTask from './AddTask';

export default class TodoList extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer} behavior='padding'>
                <Text style={styles.header}>todo list</Text>
                <TaskList />
                <AddTask />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        padding: 20,
        backgroundColor: '#ddd',
    },
    header: {
        fontSize: 40,
        color: '#aaa',
        padding: 10,
        textShadowOffset: { width: 2, height: 2 },
    }
});