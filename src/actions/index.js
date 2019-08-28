import { ADD_TODO, FETCH_TODOS, FETCH_SUCCEEDED, FETCH_FAILED } from './actionType';

export const fetchTodosAction = () => {
    return {
        type: FETCH_TODOS,
    }
}

export const addTodoAction = (newTODO) => {
    return {
        type: ADD_TODO,
        //newTODO: newTODO
        newTODO
    }
}
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedTODOs) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedTODOs
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}
