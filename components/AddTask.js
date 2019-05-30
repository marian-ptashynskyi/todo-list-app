import React from 'react';
import {
    View, 
    TextInput,
    Button, 
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { changeText, todosAddData } from '../actions/actions';
import BASE_URL from '../baseURL';

class AddTask extends React.Component {
    render() {
        return (
            <View style={styles.taskContainer}>
                <TextInput style={styles.taskText} value={this.props.text} onChangeText={(text) => this.props.changeText(text)} />
                <Button color='#ccc' title='Add' onPress={() => this.props.addTask({id: Date.now(), name: this.props.text})} />
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
        changeText: (text) => dispatch(changeText(text)),
        addTask: (task) => dispatch(todosAddData(BASE_URL, task))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

const styles = StyleSheet.create({
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