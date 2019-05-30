import React from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Task from './Task';
import { connect } from 'react-redux';
import { todosFetchData } from '../actions/actions';
import BASE_URL from '../baseURL';

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