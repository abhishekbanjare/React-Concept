// Start lecture at 8H:54M:00S and end 9H:7M:00S

import './App.css';
import Header from "./components/Header";
import { useState } from 'react';
import { useEffect } from 'react';
import useFetch from './components/useFetch';

function App() {
  //............................................................
  // const [data, setData] = useState();

  // useEffect(() => {
  //   async function getData(){
  //     const call = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");

  //     const res = await call.json();
  //     console.log(res);
  //     setData(res);
  //   }
  //   getData();
  // },[])
  //..............................................................
  const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");



  return (
  <>
     <Header />
     {
      data.map((e, i) => {
        return (
          <div className='useFetch' key={i}>
            <div>
               <img src={e.imageUrl} />
               <h4>{"FirstName: "+e.firstName}</h4>
               <h4>{"LastName: "+e.lastName}</h4>
               <h4>{"Email: "+e.email}</h4>
               <h4>{"Age: "+e.age}</h4>
               <hr/>
            </div>
          </div>
        )
      })
     }
  </>
  );
}

export default App;
