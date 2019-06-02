import React from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import { connect } from 'react-redux';

import { todosFetchData } from '../actions/actions';
import BASE_URL from '../baseURL';
import Task from './Task';

class TaskList extends React.Component {
    componentDidMount() {
        this.props.fetchAllTodos(BASE_URL);
    }

    render() {
        if (this.props.isLoading) {
            return (
                <Text>Wait !</Text>
            );
        }

        if (this.props.hasErrored) {
            return (
                <Text>Something went wrong</Text>
            )
        }
        
        return (
            <FlatList 
                style={{alignSelf: 'stretch'}}
                data={this.props.data}
                renderItem={
                    ({item}) => 
                        <Task 
                            taskId={item.id} 
                            text={item.text} 
                        />
                }
                keyExtractor={(item, index) => `key${item.id}`}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.todos,
        hasErrored: state.hasErrored,
        isLoading: state.isFetching
    };
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTodos: (url) => dispatch(todosFetchData(url))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);