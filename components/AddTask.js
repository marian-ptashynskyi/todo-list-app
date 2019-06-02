import React from 'react';
import {
    Keyboard,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { changeText, todosAddData } from '../actions/actions';
import BASE_URL from '../baseURL';
import { styles } from '../styles/AddTask.styles';

class AddTask extends React.Component {
    handleAddTaskSubmit = () => {
        this.props.addTask({
            text: this.props.text
        });

        Keyboard.dismiss();
    } 

    render() {
        return (
            <View style={styles.taskContainer}>
                <TextInput 
                    style={styles.taskText} 
                    value={this.props.text} 
                    placeholder='Add new todo task'
                    onChangeText={(text) => this.props.changeText(text)} 
                />
                <TouchableOpacity
                    color='#ccc' 
                    title='Add' 
                    onPress={this.handleAddTaskSubmit}
                >
                    <AntDesign name="plus" size={30} color='#888' />
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(todosAddData(BASE_URL, task)),
        changeText: (text) => dispatch(changeText(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);