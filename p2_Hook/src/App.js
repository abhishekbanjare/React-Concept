import './App.css';
import Header from "./component/Header";
import "./component/Header.css";
import React, {useState} from 'react'; //
function App() {
  const [num, setNum] = useState(1);  //useState Hook
  function increment(){
    setNum(num + 1);
  }
  function decrement(){
    setNum(num - 1);
  }

  return (
    <div className="App">
      <Header />
       <div className="main">
          <h1 className='heading'>{num}</h1>
          <div class="buttons">
              <button className="btn" onClick={increment}>increment</button>
              <button  className="btn" onClick={decrement}>decrement</button>
          </div>
       </div>
    </div>
  );
}

export default App;
