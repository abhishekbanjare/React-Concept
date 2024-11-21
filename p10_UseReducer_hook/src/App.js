// lecture start from 8H:40M:00S and end 8H:53M:00S

import './App.css';
import { useReducer } from "react";
import Header from './components/Header';

const reducer = (state, action) =>{
  // console.log("state:", state)
  // console.log("action:", action)

  if(action.type === "INC"){
    return state + 2;
  }else if(action.type === "DEC"){
    return state - 2;
  }else if(action.type === "MUL"){
    return state * 2;
  }
  return state;
}
function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  
  return (
    <>
      <Header />
      <h1>{state}</h1>
      <button onClick={() => dispatch({type:"INC"})}>Increment</button>
      <button onClick={() => dispatch({type:"DEC"})}>decrement</button>
      <button onClick={() => dispatch({type:"MUL"})}>Multiply</button>
    </>
  );
}

export default App;

// useRef ke help se ham DOM ke element ko directly access kar sakte hai
// the useRef hook is a built-in hook that allows you to create a mutable ref object.