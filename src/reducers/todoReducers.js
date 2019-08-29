import { ADD_TODO, FETCH_TODOS, FETCH_SUCCEEDED, FETCH_FAILED, DELETE_TODO, DELETE_SUCCEEDED } from '../actions/actionType';
const todoReducers = (todos = {}, action) => {
    console.log("red ",action.receivedFriends);
    console.log({action})
    switch (action.type) {
        case FETCH_TODOS:
            return {loading: true}
        case FETCH_SUCCEEDED:
            return {todos: action.receivedTodos, loading: action.loading, friends: action.receivedFriends}
        case FETCH_FAILED:
            return [];
        // case ADD_TODO:
        //     return [
        //         ...todos,
        //         action.newTodo
        //     ];
        case DELETE_SUCCEEDED:
            return {todos: action.receivedTodos}
        default:
            return todos; //state does not change
    }
}

export default todoReducers;