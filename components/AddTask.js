import React from 'react';
import {
    Button, 
    Keyboard,
    TextInput,
    View
} from 'react-native';
import { connect } from 'react-redux';

import { changeText, todosAddData } from '../actions/actions';
import BASE_URL from '../baseURL';
import { styles } from '../styles/AddTask.styles';

class AddTask extends React.Component {
    handleAddTaskSubmit = () => {
        this.props.addTask({
            //id: Date.now(),
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
                    onChangeText={(text) => this.props.changeText(text)} 
                />
                <Button 
                    color='#ccc' 
                    title='Add' 
                    onPress={this.handleAddTaskSubmit} 
                />
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