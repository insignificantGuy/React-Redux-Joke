import React from 'react';
import { useDispatch, useSelector} from 'react-redux';

//useDispatch - Hooks
//useSelector - Hooks
//useState, useEffect - Hooks
//React Fragment - DOM Structure becomes less complex

import {getNewQuote} from '../../actions/quote.actions';

const HeadLines = () =>{
    const dispatch = useDispatch();
    const state = useSelector(state => state.quote);
    console.log(state);
    return(
        <React.Fragment>
            <h3>{state}</h3>
            <br/>
            <button className='getQuote' onClick={()=>dispatch(getNewQuote())}>Get Quote</button>
        </React.Fragment>
    )
}

export default HeadLines;