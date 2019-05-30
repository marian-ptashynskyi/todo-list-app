export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    };
};

export const addTask = (newTask) => {
    return {
        type: 'ADD_TASK',
        task: newTask
    };
};

export const changeText = (text) => {
    return {
        type: 'CHANGE_TEXT',
        text
    };
};

export const fetchTodosRequest = () => {
    return {
        type: 'FETCH_TODOS_REQUEST'
    };
};

export const fetchTodosFailure = (error) => {
    return {
        type: 'FETCH_TODOS_ERROR',
        error
    };
};

export const fetchTodosSuccess = (todos) => {
    return {
        type: 'FETCH_TODOS_SUCCESS',
        todos
    };
};

export function todosFetchData(url) {
    return (dispatch) => {
        dispatch(fetchTodosRequest());
        
        fetch(url)
            .then(
                response => response.json(),

                error => dispatch(fetchTodosFailure(error))
            )
            .then((items) => dispatch(fetchTodosSuccess(items)))
    }
}