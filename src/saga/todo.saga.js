import ToDoTypes from "../actionTypes/todo.types";
import {put, takeEvery} from 'redux-saga/effects';

function* addNewToDo(text) {
    try{
        console.log(text.payload);
        yield put({type:ToDoTypes.SHOW_TODO_LIST,toDoTask:text.payload});
    }
    catch(err){
        console.log(err);
        yield put({type:ToDoTypes.SHOW_ERROR_MESSAGE,toDoTask:'Error'});
    }
}

export default function* todoSaga(){
    yield takeEvery('INSERT_NEW_TEXT', addNewToDo);
}