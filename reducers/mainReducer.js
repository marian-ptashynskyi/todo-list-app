const initialState = {
    tasks: [
        { id: 1, value: 'Task 1' },
        { id: 2, value: 'Task 2' },
        { id: 3, value: 'Task 3' }
    ], 
    text: ''
};

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT': 
            return { 
                ...state,
                text: action.text
            };        
        case 'ADD_TASK': 
            return {
                text: '',
                tasks: [...state.tasks, action.task]
            };
        case 'DELETE_TASK': {
            let filtered = state.tasks.filter(task => task.id !== action.id);
            return {
                ...state,
                tasks: filtered
            };
        }       
        default: 
            return state;
    }
};