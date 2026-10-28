import React, { useState } from 'react'

const ToggleDisplay = () => {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "20px" }}>
            <h2>2. No Component: Hide / Show Text</h2>
            <button onClick={() => setIsVisible(prev => !prev)}>
                {isVisible ? "Hide Text" : "Show Text"}
            </button>
            
            {isVisible && <p style={{ marginTop: "15px", color: "green", fontSize: "18px" }}>Hello !</p>}
        </div>
    )
}

export default ToggleDisplay