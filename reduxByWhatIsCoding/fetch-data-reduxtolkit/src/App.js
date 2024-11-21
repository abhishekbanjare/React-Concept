import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from './features/gitUserSlice';

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    console.log("state....", state.app);
    return state.app;
  })

  if (data.loading) {
    return <h2>Loading......</h2>;
  }
  // if (data.error != null) {
  //   console.log("error................................");
  //   <h3>{data.error}</h3>
  // }
  return (
    <div>
      <h2>Hello</h2>
      <button onClick={() => dispatch(getAllData())}>Get Github users</button>
      <div className='showdata'>
        <h2>Id</h2>
        <h2>Login</h2>
        <h2>Node_Id</h2>
      </div>
      {data.users.map((e) => (
        // <li key={e.id}>{e.login}</li>
        <div className='showdata' key={e.id}>
          <p>{e.id}</p>
          <p>{e.login}</p>
          <p>{e.node_id}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
