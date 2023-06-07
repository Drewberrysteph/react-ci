import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter((counter) => counter + 1);

  const handleDecrement = () => setCounter((counter) => counter - 1);

  return (
    <div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn CI
      </a>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}> Increment </button>
      <button onClick={handleDecrement}> Decrement </button>
    </div>
  )
}

export default App