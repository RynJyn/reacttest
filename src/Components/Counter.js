import React, {useState} from "react";
import './Counter.css';

function Counter()
{
    let count = 0;
    const [currentState, updateState] = useState(count);
    const increaseCount = () => 
    {
        updateState(currentState + 1);
    }

    return (
        <div className='main-counter'>
            <h3>Counter</h3>
            <button onClick={increaseCount}>{currentState}</button>
        </div>
    );
}

export default Counter;