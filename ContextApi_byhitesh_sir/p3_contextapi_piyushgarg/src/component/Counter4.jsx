import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Counter4 = () => {
      const piyush = useContext(CounterContext);
  return (
    <div>
        <div className='counter'>
        <button onClick={()=> piyush.setCount(piyush.count + 4)}>Increment  4</button>
        <button onClick={()=> piyush.setCount(piyush.count - 4)}>Decrement  4</button>
    </div>
    </div>
  )
}

export default Counter4