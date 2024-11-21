// Lecture start from 7H:42M:00S and end 8H:13M:00S
// props dilling problem ko solve karne ke liye react me context api ko laya gaya

import './App.css';
import { useState, createContext } from "react";
import Header from './components/Header';
import ComA from './components/ComA';

const AppState = createContext();

function App() {
  const [data, setData] = useState("Web3Mantra");
  const [name, setName] = useState({name: 'shubham', age:20});

  return (
    <>
      <AppState.Provider value={{data, name}}>   
          <Header />
          <ComA />
      </AppState.Provider>
      
    </>
  );
}

export default App;
export {AppState}



// most important topic in React
// 1 useState
// useEffect hook
// contextAPI