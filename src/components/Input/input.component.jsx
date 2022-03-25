import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { insertNewText } from '../../actions/todo.actions'; 

const InputBlock = () =>{
    const dispatch = useDispatch();
    const state = useSelector(state => state.todo);
    console.log(state);
    return(
        <React.Fragment>
            <input type='text' name="name" style={{marginTop:"16px"}}/>
            <button style={{marginLeft:"18px"}} onClick={()=>dispatch(insertNewText("Hello"))}>Enter New Task</button>
        </React.Fragment>
    )
}

export default InputBlock;