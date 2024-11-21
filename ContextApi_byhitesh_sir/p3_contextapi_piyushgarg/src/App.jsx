import './App.css'
import Counter from './component/Counter'
import Counter2 from './component/Counter2';
import Counter3 from './component/Counter3';
import Counter4 from './component/Counter4';

import { useContext } from 'react'  //koi bhi component me context ko use karne ke liye { useContext } ko import karna hota hai.
import { CounterContext } from './context/Counter'



function App() {
  const counterState = useContext(CounterContext);

  console.log("Context: ", counterState);

  return (
    <div className='app'>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter2 />
      <Counter3 />
      <Counter4 />
    </div>
  )
}

export default App
