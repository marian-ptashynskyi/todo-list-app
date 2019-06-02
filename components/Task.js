import React from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import { 
    todosChangeData,
    todosDelete
 } from '../actions/actions';
import BASE_URL from '../baseURL';
import { styles } from '../styles/Task.styles';

class Task extends React.Component {
    render() {
        return (
            <View style={styles.taskContainer}>
                <CheckBox
                    checked={this.props.value.isCompleted}
                    checkedColor='#888'
                    onPress={() => this.props.toggleCompletion(this.props.value)}
                />
                <Text 
                    style={[styles.taskText, this.props.value.isCompleted ? styles.taskTextComplete : {}]}
                >
                    {this.props.value.text}
                </Text>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => this.props.deleteTask(this.props.value.id)}
                >
                    <AntDesign name="close" size={28} color='#888' />
                </TouchableOpacity>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(todosDelete(BASE_URL, id)),
        toggleCompletion: (id) => dispatch(todosChangeData(BASE_URL, id))
    };
}

export default connect(null, mapDispatchToProps)(Task);