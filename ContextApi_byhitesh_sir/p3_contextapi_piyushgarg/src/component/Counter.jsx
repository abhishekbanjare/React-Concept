import React from 'react'
import "../App.css"
import { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Counter = () => {
     const counterContext = useContext(CounterContext);
     console.log("counterContext: ", counterContext);
  return (
    <div className='counter'>
        <button onClick={()=> counterContext.setCount(counterContext.count + 1)}>Increment  1</button>
        <button onClick={()=> counterContext.setCount(counterContext.count - 1)}>Decrement  1</button>
    </div>
  )
}

export default Counter