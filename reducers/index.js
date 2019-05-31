import { combineReducers } from 'redux';

import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    hasErrored: false,
    isFetching: false,
    text: '',
    todos: []
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TASK:
            return {
                ...state,
                text: '',
                todos: [...state.todos, action.task]
            }
        case ActionTypes.CHANGE_TEXT:
            return {
                ...state,
                text: action.text,
            }
        case ActionTypes.DELETE_TASK: {
            let filtered = state.todos.filter(task => task.id !== action.id);
            return {
                ...state,
                todos: filtered,
            }
        }
        case ActionTypes.FETCH_TODOS_FAILURE:
            return {
                ...state,
                hasErrored: action.hasErrored,
            }
        case ActionTypes.FETCH_TODOS_REQUEST:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case ActionTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.todos,
            }
        default:
            return state;
    }
}