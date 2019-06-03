import * as AT from '../actions/actionTypes';
import { rootReducer, initialState } from './index';

describe('root reducer tests', () => {
    it('Add task', () => {
        const action = {
            type: AT.ADD_TASK,
            task: { id: 1, text: 'New', isCompleted: true }
        }

        expect(rootReducer(initialState, action)).toEqual({
            ...initialState, 
            text: '',
            todos: [{ id: 1, text: 'New', isCompleted: true }]
        });
    });
    it('Change text', () => {
        const action = {
            type: AT.CHANGE_TEXT,
            text: 'new text'
        }

        expect(rootReducer(initialState, action)).toEqual({
            ...initialState,
            text: 'new text',
        });
    });
    it('Delete task', () => {
        const action = {
            type: AT.DELETE_TASK,
            id: 1
        }

        let state = {...initialState, todos: [{id: 1, text: 'New', isCompleted: true}]};

        expect(rootReducer(state, action)).toEqual(initialState);
    });
    it('Fetch failure', () => {
        const action = {
            type: AT.FETCH_TODOS_FAILURE,
            hasErrored: true
        }

        expect(rootReducer(initialState, action)).toEqual({
            ...initialState,
            hasErrored: true
        });
    });
    it('Fetch request', () => {
        const action = {
            type: AT.FETCH_TODOS_REQUEST,
            isFetching: true
        }

        expect(rootReducer(initialState, action)).toEqual({
            ...initialState,
            isFetching: true
        });
    });
    it('Fetch success', () => {
        const items = [{id: 1, text: 'New', isCompleted: true}, {id: 3, text: 'New', isCompleted: true}];

        const action = {
            type: AT.FETCH_TODOS_SUCCESS,
            todos: items
        }

        expect(rootReducer(initialState, action)).toEqual({
            ...initialState,
            todos: items
        });
    });
    it('Toggle completion test', () => {
        const state = {...initialState, todos: [{id: 1, text: 'New', isCompleted: true}, {id: 3, text: 'New', isCompleted: true}]};

        const action = {
            type: AT.TOGGLE_COMPLETION,
            id: 1
        }

        expect(rootReducer(state, action)).toEqual({
            ...state,
            todos: [{id: 1, text: 'New', isCompleted: false}, {id: 3, text: 'New', isCompleted: true}]
        })
    });
})