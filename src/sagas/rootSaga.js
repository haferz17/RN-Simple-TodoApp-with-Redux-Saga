import { all } from 'redux-saga/effects';
import { watchFetchTodos, watchAddNewTodo, watchDeleteTodo } from './todoSagas';

export default function* rootSaga() {
    console.log("object");
    yield all([
        watchFetchTodos(),
        watchAddNewTodo(),
        watchDeleteTodo()
    ])             
}