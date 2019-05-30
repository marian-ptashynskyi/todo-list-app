import React from 'react';
import { 
    Button, 
    Text, 
    View 
} from 'react-native';
import { connect } from 'react-redux';

import { todosDelete } from '../actions/actions';
import BASE_URL from '../baseURL';
import { styles } from '../styles/Task.styles';

class Task extends React.Component {
    render() {
        return (
            <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{this.props.text}</Text>
                <Button 
                    color='#ccc'
                    title='x' 
                    onPress={() => this.props.deleteTask(this.props.taskId)}
                />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(todosDelete(BASE_URL, id))
    };
}

export default connect(null, mapDispatchToProps)(Task);