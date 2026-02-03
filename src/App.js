import React from 'react'

import { useState } from 'react';
import { useCallback } from 'react';
import Child from './Child';

const App = () => {

  const[count, setCount] = useState(0);
  const[name, setName]  = useState("John");

const increment = useCallback(
  () => {
    setCount(prev => prev+1);
  },
  [],
)

  
  return (
    <>

      <h2> count : {count}</h2>

      <input type ="text" value = {name}></input>


      <Child onIncrement = {increment}></Child>


    
    </>
  )
}

export default App