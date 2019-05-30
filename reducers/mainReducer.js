const initialState = {
    todos: [
        { id: 1, value: 'Task 1' },
        { id: 2, value: 'Task 2' },
        { id: 3, value: 'Task 3' }
    ], 
    text: '',
    isFetching: false,
    hasErrored: false
};

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_TODOS_REQUEST':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_TODOS_ERROR':
            return {
                ...state,
                todos: [],
                isFetching: false,
                hasErrored: true
            };
        case 'FETCH_TODOS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                todos: action.todos
            };
        case 'CHANGE_TEXT': 
            return { 
                ...state,
                text: action.text
            };        
        case 'ADD_TASK': 
            return {
                text: '',
                todos: [...state.todos, action.task]
            };
        case 'DELETE_TASK': {
            let filtered = state.todos.filter(task => task.id !== action.id);
            return {
                ...state,
                todos: filtered
            };
        }       
        default: 
            return state;
    }
};