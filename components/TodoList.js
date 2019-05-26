import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import TaskList from './TaskList';
import AddTask from './AddTask';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 1, value: 'Task 1' },
                { id: 2, value: 'Task 2' },
                { id: 3, value: 'Task 3' }
            ]
        };
    }

    addTask = (text) => {
        return () => {
            this.setState(prevState => (
                { tasks: [...prevState.tasks, { id: Date.now(), value: text }] }
            )
            );
        };
    };

    removeTask = (id) => {
        return () => {
            this.setState(prevState => ({ tasks: prevState.tasks.filter(item => item.id !== id) }));
        };
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.mainContainer} behavior='padding'>
                <Text style={styles.header}>todo list</Text>
                <TaskList data={this.state.tasks} onRemove={this.removeTask} />
                <AddTask onSubmit={this.addTask} />
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
        //justifyContent: 'space-between',
    },
    header: {
        fontSize: 40,
        color: '#aaa',
        padding: 10,
        textShadowOffset: { width: 2, height: 2 },
    }
});