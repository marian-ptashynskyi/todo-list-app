import * as AT from './actionTypes';
import * as Actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import BASE_URL from '../baseURL';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetch actions tests', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    });

    it('test fetch todos data (GetAll) 200OK', () => {
        fetchMock.once(BASE_URL, {
            headers: { 'content-type': 'application/json' }, 
            body: [1, 2, 3],
          })

        const expectedActions = [
            {
                type: AT.FETCH_TODOS_REQUEST,
                isFetching: true
            },
            {
                type: AT.FETCH_TODOS_REQUEST,
                isFetching: false
            },
            {
                type: AT.FETCH_TODOS_SUCCESS,
                todos: [1, 2, 3]
            }
        ]

        const store = mockStore({})

        return store.dispatch(Actions.todosFetchData(BASE_URL)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
    it('test fetch todos data (GetAll) FAIL', () => {
        fetchMock.once(BASE_URL, 404)

        const expectedActions = [
            {
                type: AT.FETCH_TODOS_REQUEST,
                isFetching: true
            },
            {
                type: AT.FETCH_TODOS_FAILURE,
                hasErrored: true
            }
        ]

        const store = mockStore({})

        return store.dispatch(Actions.todosFetchData(BASE_URL)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    });
    it('test fetch todos add item (Post) SUCCESS', () => {
        let item = {id: 1, text: '', isCompleted: false};
        let itemJson = JSON.stringify(item);
        fetchMock.postOnce(BASE_URL, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: itemJson
        })

        const expectedActions = [
            {
                type: AT.ADD_TASK,
                task: item
            }
        ]

        const store = mockStore({});

        return store.dispatch(Actions.todosAddData(BASE_URL, item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
    it('test fetch todos add item (Post) FAILURE', () => {
        let item = {id: 1, text: '', isCompleted: false};
        fetchMock.postOnce(BASE_URL, 400);

        const expectedActions = [
            {
                type: AT.FETCH_TODOS_FAILURE,
                hasErrored: true
            }
        ]

        const store = mockStore({});

        return store.dispatch(Actions.todosAddData(BASE_URL, item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
    it('test fetch todos delete item (Delete) SUCCESS', () => {
        fetchMock.deleteOnce(`${BASE_URL}/1`, 200)

        const expectedActions = [
            {
                type: AT.DELETE_TASK,
                id: 1
            }
        ]

        const store = mockStore({});

        return store.dispatch(Actions.todosDelete(BASE_URL, 1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
    it('test fetch todos delete item (Delete) FAILURE', () => {
        fetchMock.deleteOnce(`${BASE_URL}/1`, 404);

        const expectedActions = [
            {
                type: AT.FETCH_TODOS_FAILURE,
                hasErrored: true
            }
        ]

        const store = mockStore({});

        return store.dispatch(Actions.todosDelete(BASE_URL, 1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
    it('test fetch todos change item (Put) SUCCESS', () => {
        let item = {id: 1, text: '', isCompleted: false};
        let itemJson = JSON.stringify(item);
        fetchMock.putOnce(`${BASE_URL}/1`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: itemJson
        })

        const expectedActions = [
            {
                type: AT.TOGGLE_COMPLETION,
                id: 1
            }
        ]

        const store = mockStore({});

        return store.dispatch(Actions.todosChangeData(BASE_URL, item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
    it('test fetch todos change item (Put) FAILURE', () => {
        let item = {id: 1, text: '', isCompleted: false};
        fetchMock.putOnce(`${BASE_URL}/1`, 400);

        const expectedActions = [
            {
                type: AT.FETCH_TODOS_FAILURE,
                hasErrored: true
            }
        ]

        const store = mockStore({});

        return store.dispatch(Actions.todosChangeData(BASE_URL, item)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });
});