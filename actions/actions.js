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

// TODO It is not working with errors... redo
// export function todosFetchData(url) {
//     return (dispatch) => {
//         dispatch(fetchTodosRequest());

//         fetch(url)
//             .then(
//                 response => response.json(),

//                 error => dispatch(fetchTodosFailure(error))
//             )
//             .then((items) => dispatch(fetchTodosSuccess(items)))
//     }
// }

export function todosFetchData(url) {
    return (dispatch) => {
        dispatch(fetchTodosRequest());

        fetch(url)
            .then(
                response => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    return response.json();
                }
            )
            .then((items) => dispatch(fetchTodosSuccess(items)))
            .catch(error => dispatch(fetchTodosFailure(error)))
    }
}

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

                return response;
            })
            .then(() => dispatch(addTask(item)))
            .catch(error => dispatch(fetchTodosFailure(error)));
    }
}

// Move URLs to external file

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
            .catch(error => dispatch(fetchTodosFailure(error)));
    }
}