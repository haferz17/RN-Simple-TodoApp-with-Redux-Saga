import { call, all } from 'redux-saga/effects';
import { watchFetchTodos } from './todoSagas';

export default function* rootSaga() {
    yield call(watchFetchTodos);              
}