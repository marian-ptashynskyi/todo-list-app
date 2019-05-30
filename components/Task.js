import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { deleteTask, todosDelete } from '../actions/actions';
import BASE_URL from '../baseURL';

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

const mapStateToProps = (state) => {
    return { 

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(todosDelete(BASE_URL, id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        margin: 2,
        borderColor: '#dedede',
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#eee',
        shadowOffset: {width: 2, height: 2},
        alignSelf: 'stretch',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
    taskText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#777',
    },
});