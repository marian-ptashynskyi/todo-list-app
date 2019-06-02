import * as ActionTypes from './actionTypes';

export const addTask = (newTask) => {
    return {
        type: ActionTypes.ADD_TASK,
        task: newTask
    };
};

export const changeText = (text) => {
    return {
        type: ActionTypes.CHANGE_TEXT,
        text
    };
};

export const deleteTask = (id) => {
    return {
        type: ActionTypes.DELETE_TASK,
        id
    };
};

export const fetchTodosFailure = (bool) => {
    return {
        type: ActionTypes.FETCH_TODOS_FAILURE,
        hasErrored: bool
    };
};

export const fetchTodosRequest = (bool) => {
    return {
        type: ActionTypes.FETCH_TODOS_REQUEST,
        isFetching: bool
    };
};

export const fetchTodosSuccess = (todos) => {
    return {
        type: ActionTypes.FETCH_TODOS_SUCCESS,
        todos
    };
};

export function todosAddData(url, item) {
    return (dispatch) => {
        let itemJson = JSON.stringify(item);
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: itemJson
        })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response.json();
            })
            .then((response) => dispatch(addTask(response)))
            .catch(error => { console.log(error); dispatch(fetchTodosFailure(true))});
    }
}

export function todosDelete(url, id) {
    return (dispatch) => {
        fetch(`${url}/${id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                
                return response;
            })
            .then(() => dispatch(deleteTask(id)))
            .catch(error => dispatch(fetchTodosFailure(true)));
    }
}

export function todosFetchData(url) {
    return (dispatch) => {
        dispatch(fetchTodosRequest(true));

        fetch(url)
            .then(
                response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }

                    
                    dispatch(fetchTodosRequest(false));

                    return response.json();
                }
            )
            .then((items) => dispatch(fetchTodosSuccess(items)))
            .catch(error => dispatch(fetchTodosFailure(true)));
    }
}