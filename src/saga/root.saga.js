import { all } from 'redux-saga/effects';
import quoteSaga from './quote.saga.js';
import todoSaga from './todo.saga.js';

export default function* rootSaga(){
    yield all([
        quoteSaga(),
        todoSaga(),
    ])
};