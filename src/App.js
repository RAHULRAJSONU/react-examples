import React from 'react';
import {useSelector, useDispatch } from 'react-redux';

const App = props => {

    const counter = useSelector((state)=>state.counter);

    const dispatch = useDispatch();

    return(
        <>
            <div className="App">
                <header className="App-header">
                    <h1>{counter}</h1>
                    <button onClick={(()=>dispatch({type: "INCREMENT"}))}>Increment</button>
                    <button onClick={(()=>dispatch({type: "DECREMENT"}))}>Decrement</button>
                </header>
            </div>
        </>
    )
}

export default App;