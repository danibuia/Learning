import React, {useState} from 'react';

const App = () => {

  const [count, setCount] = useState("");
  function decrease () {
    setCount (count -1)
  }
  function increase () {
    setCount (count +1)
  }

  return (
    <>
    <button onClick={decrease}>-</button>
      <span>{count}</span>
  
    <button onClick={increase}>+</button>


    
    
    </>
  )
}

export default App