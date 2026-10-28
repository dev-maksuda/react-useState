import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa' 

const PasswordToggle = () => {
    const [passtype, setPasstype] = useState(true)

    return (
        <div style={{ padding: "20px 0", border: "1px solid #ccc", marginTop: "20px"}}>
            <div>
                <h2>3. No Component: Hide / Show Password</h2>
                <input 
                    type={passtype ? 'password' : 'text'} 
                    placeholder='Enter your password' 
                    style={{ padding: "10px", fontSize: "16px" }}
                />
                
                <button 
                    onClick={() => setPasstype(!passtype)} 
                    style={{ marginLeft: "10px", padding: "10px", cursor: "pointer" }}
                >
                    {passtype ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
            </div>
        </div>
    )
}

export default PasswordToggle
