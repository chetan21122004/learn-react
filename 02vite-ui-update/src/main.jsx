import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


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
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App/>

)
