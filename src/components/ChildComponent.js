import React, {useEffect} from 'react';

let count = 0;
const ChildComponent=(props)=>{
    useEffect(()=>{
        count++;
    });
    useEffect(() => {
        props.fetchData("users");
    }, [props]);
    return (
        <div>
            <h2>{props.title}</h2>
            <h2>Child Component: {count}</h2>
        </div>
    )
};

export default React.memo(ChildComponent);