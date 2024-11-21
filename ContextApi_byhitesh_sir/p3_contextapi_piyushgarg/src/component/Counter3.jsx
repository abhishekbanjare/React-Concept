import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Counter3 = () => {
         const abhishek = useContext(CounterContext);
  return (
    <div>
        <div className='counter'>
        <button onClick={()=> abhishek.setCount(abhishek.count + 3)}>Increment  3</button>
        <button onClick={()=> abhishek.setCount(abhishek.count - 3)}>Decrement  3</button>
    </div>
    </div>
  )
}

export default Counter3