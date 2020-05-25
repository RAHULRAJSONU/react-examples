import React,{ useState, useMemo } from 'react';
import Child from './components/child';

const App = props => {
    const [i, setI]=useState(0);
    const memoChild = useMemo(()=>{
        return <Child></Child>
    },[i])
    return(
        <>
            <h1>UseMemo</h1>
            <h3>i: {i}</h3>
            <button onClick={()=>setI(i+1)}>Increment I</button>
            <h3>Memo child</h3>
            {memoChild}
        </>
    )
}

export default App;