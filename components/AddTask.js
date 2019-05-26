import React from 'react';
import {
    View, 
    TextInput,
    Button, 
    StyleSheet
} from 'react-native';

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View style={styles.taskContainer}>
                <TextInput style={styles.taskText} value={this.state.text} onChangeText={(text) => this.setState({text})} />
                <Button color='#ccc' title='Add' onPress={this.props.onSubmit(this.state.text)} />
            </View>
        );
    }
}

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