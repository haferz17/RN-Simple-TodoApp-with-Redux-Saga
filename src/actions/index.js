import { ADD_TODO, FETCH_TODOS, FETCH_SUCCEEDED, FETCH_FAILED, DELETE_TODO, DELETE_SUCCEEDED, FETCH_FRIENDS} from './actionType';

export const fetchTodosAction = () => {
    return {
        type: FETCH_TODOS,
    }
}

export const addTodoAction = (newTodo) => {
    console.log("action ",newTodo)
    return {
        type: ADD_TODO,
        newTodo
    }
}
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedTodos) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedTodos
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}

//Delete existing todo
export const deleteItemAction = (deletedTodoId) => {      
    console.log("trigger", deletedTodoId)
    return {
        type: DELETE_TODO,        
        deletedTodoId
    }
}
//Action sent by Redux-saga
export const deleteItemSuccessAction = (deletedTodoId) => {
    return {
        type: DELETE_SUCCEEDED,        
        deletedTodo
    }
}