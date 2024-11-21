import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Counter2 = () => {
        const counterContext = useContext(CounterContext);
  return (
    <div>
        <div className='counter'>
        <button onClick={()=> counterContext.setCount(counterContext.count + 2)}>Increment  2</button>
        <button onClick={()=> counterContext.setCount(counterContext.count - 2)}>Decrement  2</button>
    </div>
    </div>
  )
}

export default Counter2;