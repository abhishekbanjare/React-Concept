// lecture started at 10H:8M and ended at 10H:14M

import './App.css';
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { TailSpin } from 'react-loader-spinner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() =>{
    setLoading(true);
     async function getData(){
      const res = await fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
      const finalRes = await res.json();
      // setLoading(false);

      setData(finalRes);
      console.log(finalRes);
      setLoading(false);
      toast.success("Successfully fetched data");
     }
      getData();
  },[])

  return (
    <>
       <Header />
       <ToastContainer />
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




//1. React Loaders.............................................................................
//https://www.npmjs.com/package/react-loader-spinner
// install package: npm i react-loader-spinner
//Go to site and start: https://mhnpd.github.io/react-loader-spinner/

//2. React Toastify...........................................................................
//https://www.npmjs.com/package/react-toastify
//Install package: npm i react-toastify
//go to github repositorey: https://github.com/fkhadra/react-toastify
//go to documentation: https://fkhadra.github.io/react-toastify/introduction/

// go to: https://www.npmjs.com/package/react-toastify?activeTab=readme   and import css


//"successfully fetched data" more then one time show ho raha (reson useState).
//if we want to "successfully fetched data" show only one time then go to index.js file and coment 
//<React.StrictMode>  //comment this table
//<App />
//</React.StrictMode>
