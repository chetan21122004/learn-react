import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  
  function add() {
    
    if(count<20)
    setCount(count+1);
  }
  
  function dele() {
    if(count>0)
    setCount(count-1)
    
  }

 
  



  return (
    <>
    <h1> Update Counter {count}</h1>

    <button onClick={add}>Add {count}</button>

    <button onClick={dele}>Remove {count}</button>

    </>
  )
}

export default App
