import React, { useState, useEffect,useCallback } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

const App = props => {
    const [count, setCount] = useState(0);
    const fetchData = useCallback((type) =>{
        return fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => console.log(json));
    },[]);

    useEffect(() => {
        fetchData("todos");
    }, [fetchData]);

    return (
        <div className="App">
            <header className="App-header">
                <h2>{count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <ChildComponent title="This is the title" fetchData={fetchData} />
            </header>
        </div>
    )
}

export default App;