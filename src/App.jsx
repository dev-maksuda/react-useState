import React from 'react'
import Counter from './components/Counter.jsx' 
import ToggleDisplay from './components/ToggleDisplay.jsx'

const App = () => {
  return (
    <div style={{ padding: "50px" }}>
      <h1>My React Project</h1>
      
      {/* my two components */}
      <Counter />
      <ToggleDisplay />
      
    </div>
  )
}

export default App