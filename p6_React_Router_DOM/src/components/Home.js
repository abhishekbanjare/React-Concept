import React, {useState, useEffect} from 'react';
import './Header.css';


const Home = () => {
    
    const [state, setState] = useState(2);  //we can increase or decrease initial size
    const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(){
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const respons = await get.json();
      setData(respons);
      console.log(respons);
    }
    getData();

    document.title = `(${state}) Employees Online`;
  },[state])

  // console.log("Function Body");
    return (
        <div>
            {/* { console.log("Inside JSX") } */}
            <button id="homeBtn" onClick={() => setState(state + 2)}>Click Me {state}</button>
            {/* <button onClick={() => setState2(state2+1)}>Click Me {state2}</button> */}
            {
              data.map((element, index) => {
              return(
               <div className='data' key={index}>
                  <h4>{element.firstName}</h4>
                  <h4>{element.lastName}</h4>
                  <h4>{element.email}</h4>
               </div>
              )
           })
           }
        </div>
    )
}

export default Home
