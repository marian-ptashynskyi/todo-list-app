import * as ActionTypes from '../actions/actionTypes';

export function todos(state = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_TASK:
            return [...state, action.task];
        case ActionTypes.DELETE_TASK: {
            let filtered = state.filter(task => task.id !== action.id);
            return filtered;
        }
        case ActionTypes.FETCH_TODOS_SUCCESS:
            return action.todos;
        default:
            return state;
    }
}

export function text(state = '', action) {
    switch (action.type) {
    case ActionTypes.ADD_TASK:
        return '';
    case ActionTypes.CHANGE_TEXT:
        return action.text;

    default: 
        return state;
    }
}