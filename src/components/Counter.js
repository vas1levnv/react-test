import React, {useState} from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}> increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
        </div>
    );
};

export default Counter;