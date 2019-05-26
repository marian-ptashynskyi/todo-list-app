import React from 'react';
import {
    View, 
    FlatList,
    StyleSheet, 
    ScrollView
} from 'react-native';
import Task from './Task';

export default class TaskList extends React.Component {
    render() {
        return (
            <FlatList style={{alignSelf: 'stretch'}}
                    data={this.props.data}
                    renderItem={({item}) => 
                        <Task taskId={item.id} text={item.value} onRemove={this.props.onRemove} />}
                    keyExtractor={(item, index) => `key${item.id}` }
            />
        );
    }
}