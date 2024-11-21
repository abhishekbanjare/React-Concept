// lecture started at 9H:48M and ended at H:M
import './App.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Inc, Dec } from './states/reducers/index'

function App() {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();  //send action to redux store
  return (
    <>
      <h1>React Redux Tutorial</h1>
      <div style={{ width: "100%", display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h1>{curState}</h1>
        <div>
          <button onClick={() => dispatch(Inc())}>Inc</button>
          <button onClick={() => dispatch(Dec())}>Dec</button>
        </div>

      </div>
    </>
  );
}

export default App;
