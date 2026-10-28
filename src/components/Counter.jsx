import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10)

    const increment = () => setCount(prevCount => prevCount + 1)
    const decrement = () => setCount(prevCount => prevCount - 1)

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}>
            <h2>1 No Component: Counter</h2>
            <button onClick={increment}>Increment</button>
            <h1 style={{ padding: "20px 0" }}>Count Value: {count}</h1>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter