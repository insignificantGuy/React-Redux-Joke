import ToDoTypes from '../actionTypes/todo.types';

const INITIAL_STATE = {
    toDoList : [],
    toDoTask : 'No Such Task'
};

const todoReducer = (state=INITIAL_STATE, action) => {
    console.log(action.payload)
    switch(action.type){
        case ToDoTypes.INSERT_NEW_TEXT:{
            return{
                ...state,
                toDoTask:action.payload,
            };
        }
        case ToDoTypes.SHOW_TODO_LIST:{
            return {
                ...state,
            };
        }
        case ToDoTypes.SHOW_ERROR_MESSAGE:{
            return {
                ...state,
            };
        }
        default:{
            return {...state}
        }
    }
};

export default todoReducer;