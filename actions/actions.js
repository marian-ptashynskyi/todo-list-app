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