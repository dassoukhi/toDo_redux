import React, {useState} from 'react';

const Counter = () => {
    const [counterValue , setCounterValue] = useState(0);
    return (
        <div>
            
            <p>{counterValue}</p>
            <button onClick = {() => setCounterValue(counterValue - 1)}>-</button>
            <button onClick = {() => setCounterValue(counterValue + 1)}>+</button>
        </div>
    );
};

export default Counter;