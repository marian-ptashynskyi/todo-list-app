import { combineReducers } from 'redux';

import { hasErrored, isFetching } from './fetchTodosReducer';
import { text, todos } from './todosReducer';

export default combineReducers({
    hasErrored,
    isFetching,
    text,
    todos
});