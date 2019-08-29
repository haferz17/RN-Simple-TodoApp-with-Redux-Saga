import { FETCH_TODOS, FETCH_SUCCEEDED, FETCH_FAILED, ADD_TODO, DELETE_TODO, DELETE_SUCCEEDED, FETCH_FRIENDS } from '../actions/actionType';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchTodos() {
    try {
        const received = yield Api.getTodosFromApi();   
        const receivedTodos = received.data;
        const receivedFriends = received.friends;
        yield put({ type: FETCH_SUCCEEDED, receivedTodos: receivedTodos, loading:false, receivedFriends });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchTodos() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
}

//Add new Todo
function* addNewTodo(action) {     
    console.log(action)       
    try {
        const received = yield Api.getTodosFromApi();   
        const receivedTodos = received.data;
        let newData = yield Api.insertNewTodoFromApi(action.newTodo);
        let newTodos = receivedTodos;
        newTodos.push(newData)
        // if (result === true) {
        yield put({ type: FETCH_TODOS, receivedTodos: newTodos });     
        // }
    } catch (error) {        
        //do nothing
    }
}
export function* watchAddNewTodo() {            
    yield takeLatest(ADD_TODO, addNewTodo);
}

//Delete a todo
function* deleteTodo(action) {  
    console.log("run")
    try {        
        let data = yield Api.deleteTodoFromApi(action.deletedTodoId); 
        let deleteId = data.id;
        let newData = data.data;
        let newItem = newData;
        console.log("id ",deleteId,"new ",newData);
        let newTodos = [];
        for(let i=0;i<newItem.length;i++){
            if(newItem[i].id!==deleteId){
                newTodos.push(newItem[i])
            }
        }
        console.log(newTodos)
        yield put({ type: DELETE_SUCCEEDED, receivedTodos: newTodos });     
        
    } catch (error) {        
        //do nothing
    }
}
export function* watchDeleteTodo() {            
    yield takeLatest(DELETE_TODO, deleteTodo);
}