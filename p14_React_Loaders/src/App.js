// lecture started at 9H:48M and ended at 10H:8M
import './App.css';
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { TailSpin } from 'react-loader-spinner';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() =>{
    setLoading(true);
     async function getData(){
      const res = await fetch('https://hub.dummyapis.com/employee?noofRecords=1000&idStarts=1001');

      const finalRes = await res.json();
      // setLoading(false);

      setData(finalRes);
      console.log(finalRes);
      setLoading(false);


     }
      getData();
  },[])

  return (
    <>
       <Header />
       <div className="main">

          {loading ? 
          <div className='tailspin'><TailSpin color="red"/> </div>
           :
           data.map((e, i) => {
            return(
              <div className='datashow'>
                <p>{e.firstName}</p>
                <p>{e.email}</p>
                <p>{e.address}</p>
              </div>
            )
          })
          }
       </div>

    </>
  );
}

export default App;



//..............................................................................................
//https://www.npmjs.com/package/react-loader-spinner
// install package: npm i react-loader-spinner
//Go to site and start: https://mhnpd.github.io/react-loader-spinner/
