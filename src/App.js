import React, {useState, useEffect } from 'react';
import './App.css';

let born =false;

const App = props => {
    const [growth, setGrowth]=useState(0);
    const [nirvana, setNirwana] = useState(false);

    const growHandle = () =>{
        setGrowth(growth+10);
    };

    useEffect(()=>{
        console.log('I am born!');
    },[]);

    useEffect(()=>{
        if(born){
            document.title = "nirvana attained";
        }
    },[nirvana]);

    useEffect(()=>{
        if(born)
            console.log('Make mistake and keep growing!');
        else
            born=true;
        
        if(growth > 70)
            setNirwana(true);
        return ()=>{
            console.log('Clean up after mistakes.')
        };
    });

    return(
        <div className="App">
            <header className="App-header">
                <h1>Use Effect</h1>
                <h3>Growth:{growth}</h3>
                <button onClick={growHandle}>Learn and grow!</button>
            </header>
        </div>
    )
}

export default App;