import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(10)

    return (
        <div style={{padding: "100px"}}>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1 style={{padding: "40px"}}>Count Value: {count}</h1>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default UseState

