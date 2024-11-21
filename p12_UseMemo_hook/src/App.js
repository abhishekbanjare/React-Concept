// start lecture at 9H:7M:00S and end 9H:26S:M
// UseMemo_Hook ka use ham value ko memorize karne ke liye karte hai
import './App.css';
import Header from './components/Header';
import { useState } from "react";
import { useEffect, useMemo } from "react";
// import useFetch from "./components/useFetch";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const expensiveCalculation = (num) => {
    console.log("Calculation");
    for (let i=0; i<1000000000; i++){}
      return num;
  }
  const calculation = useMemo(() => 
        expensiveCalculation(count)
        ,[name]);  //[count]

  return (
      <>
        <div>
            <Header />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h1>Count: {count}</h1>
            <input onChange={(e) => setName(e.target.value)} />
            <h1>Name: {name}</h1>
        </div>
      </>
  );
}

export default App;
