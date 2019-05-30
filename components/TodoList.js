import React from 'react';
import {
    KeyboardAvoidingView,
    Text    
} from 'react-native';

import AddTask from './AddTask';
import TaskList from './TaskList';
import { styles } from '../styles/TodoList.styles'

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