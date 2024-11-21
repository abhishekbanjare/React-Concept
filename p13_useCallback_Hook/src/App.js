// start lecture at 9H:27M:00S and end 9H:48M:15S
// UseCallback_Hook ka use function ko memori me memorize karne ke liye karte hai

import './App.css';
import Header from "./components/Header";
import { useState, useCallback } from "react";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c)=> c + 1);
  };

  // const addTodo = () => {
  //   setTodos((t)=> [...t, "New Todo"]);
  // }
  //.........................................
  const addTodo = useCallback(() => {
     setTodos((t) => [...t, "New Todo"]);
  },[todos]);

  return (
    <>
      <Header />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>

      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </>
  );
}

export default App;
