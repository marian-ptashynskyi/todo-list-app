import React from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Task from './Task';
import { connect } from 'react-redux';
import { todosFetchData } from '../actions/actions';

class TaskList extends React.Component {
    componentDidMount() {
        //this.props.fetchAllTodos('http://192.168.0.104:5000/api/todo');
        this.props.fetchAllTodos('http://192.168.103.121:5000/api/todo');
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
            <FlatList style={{alignSelf: 'stretch'}}
                    data={this.props.data}
                    renderItem={({item}) => 
                        <Task taskId={item.id} text={item.name} />}
                    keyExtractor={(item, index) => `key${item.id}` }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.todos,
        isLoading: state.isFetching,
        hasErrored: state.hasErrored
    };
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTodos: (url) => dispatch(todosFetchData(url))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);