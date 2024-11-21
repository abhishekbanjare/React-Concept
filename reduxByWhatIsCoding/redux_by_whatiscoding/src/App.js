// import './App.css';
import { useSelector } from "react-redux";
import Child1 from "./components/Child1";

function App() {
  const data = useSelector((c) => {
    return c.show.value;
  });
  return (
    <div>
      <h1>App : {data}</h1>
      <Child1 />
    </div>
  );
}

export default App;
