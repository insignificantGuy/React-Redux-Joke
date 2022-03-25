import ToDoTypes from '../actionTypes/todo.types';

export const insertNewText = (payload) => ({
    type: ToDoTypes.INSERT_NEW_TEXT,
    payload:payload
});