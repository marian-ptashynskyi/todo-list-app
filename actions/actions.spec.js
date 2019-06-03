import * as AT from './actionTypes';
import * as Actions from './actions';

describe('action creators test', () => {
    it('Add task action creator', () => {
        const task = {id: 1, text: 'text', isCompleted: true};
        expect(Actions.addTask(task)).toEqual({ type: AT.ADD_TASK, task: task });
    });
    it('Change text action creator', () => {
        expect(Actions.changeText('new text')).toEqual({ type: AT.CHANGE_TEXT, text: 'new text' });
    });
    it('Delete task action creator', () => {
        expect(Actions.deleteTask(1)).toEqual({ type: AT.DELETE_TASK, id: 1 });
    });
    it('Fetch todos failure action creator', () => {
        expect(Actions.fetchTodosFailure(true)).toEqual({ type: AT.FETCH_TODOS_FAILURE, hasErrored: true });
    });
    it('Fetch todos request action creator', () => {
        expect(Actions.fetchTodosRequest(true)).toEqual({ type: AT.FETCH_TODOS_REQUEST, isFetching: true });
    });
    it('Fetch todos success action creator', () => {
        const task = {id: 1, text: 'text', isCompleted: true};
        expect(Actions.fetchTodosSuccess([task])).toEqual({ type: AT.FETCH_TODOS_SUCCESS, todos: [task] });
    });
    it('Toggle todos completion action creator', () => {
        expect(Actions.toggleTodosCompletion(1)).toEqual({ type: AT.TOGGLE_COMPLETION, id: 1 });
    });
});