// lecture start from 8H:13M:00S and end 8H:40M:00S

import './App.css';
import { useState, useEffect, useRef} from "react";
import Header from './components/Header';

function App() {
  // const [input, setInput] = useState("");
  // const counter = useRef(0);
  // const prevState = useRef("");
  const inputField = useRef();

  // useEffect(()=>{
  //   //  counter.current = counter.current + 1;
  //   prevState.current = input;
  // }, [input]) 

  // const formHandler = (e) => {
  //   setInput(e.target.value);
  // }

  const clickHandler = (e) =>{
    // inputField.current.focus();
    // inputField.current.value = "Abhishek";
    console.log(inputField.current.value);
    inputField.current.style.border = "2px solid red"
  }
  return (
    <>
      <Header />
      {/* <input value={input} onChange={formHandler} /> */}
      <input ref={inputField} />
      {/* <h4>Application has been rendered {counter.current} times</h4> */}
      {/* <h4>Prev state was {prevState.current}</h4> */}
      {/* <button onClick={clickHandler}>Click Me</button> */}
      <button onClick={clickHandler}>Submit</button>
    </>
  );
}

export default App;

// useRef ke help se ham DOM ke element ko directly access kar sakte hai
// the useRef hook is a built-in hook that allows you to create a mutable ref object.