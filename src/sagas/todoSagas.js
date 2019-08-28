import { FETCH_TODOS, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionType';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchTodos() {
    try {
        const receivedTodos = yield Api.getTodosFromApi();   
        console.log(receivedTodos)
        yield put({ type: FETCH_SUCCEEDED, receivedTodos: receivedTodos, loading:false });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchTodos() {
    yield takeLatest(FETCH_TODOS, fetchTodos);
}