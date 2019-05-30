import * as ActionTypes from '../actions/actionTypes';

export function hasErrored(state = false, action) {
    switch (action.type) {
        case ActionTypes.FETCH_TODOS_FAILURE:
            return action.hasErrored;

        default:
            return state;
    }
}

export function isFetching(state = false, action) {
    switch (action.type) {
        case ActionTypes.FETCH_TODOS_REQUEST:
            return action.isFetching;

        default:
            return state;
    }
}