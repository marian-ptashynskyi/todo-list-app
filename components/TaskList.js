import React from 'react';
import {
    FlatList
} from 'react-native';
import Task from './Task';
import { connect } from 'react-redux';

class TaskList extends React.Component {
    render() {
        return (
            <FlatList style={{alignSelf: 'stretch'}}
                    data={this.props.data}
                    renderItem={({item}) => 
                        <Task taskId={item.id} text={item.value} />}
                    keyExtractor={(item, index) => `key${item.id}` }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.tasks
    }
}; 

export default connect(mapStateToProps)(TaskList);