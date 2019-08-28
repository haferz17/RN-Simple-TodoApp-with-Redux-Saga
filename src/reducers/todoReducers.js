import { ADD_TODO, FETCH_TODOS, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionType';
const todoReducers = (todos = {}, action) => {
    console.log("red ",action.receivedTodos);
    switch (action.type) {
        case FETCH_TODOS:
            return {loading: true}
        case FETCH_SUCCEEDED:
            return {todos: action.receivedTodos,loading: action.loading}
        case FETCH_FAILED:
            return [];
        case ADD_TODO:
            return [
                ...todos,
                action.newTodo
            ];
        default:
            return todos; //state does not change
    }
}

export default todoReducers;