import './App.css';
import Header from "./component/Header";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
// import Datashow from "./component/Datashow";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  //addData.............
  const addData = () =>{
    setData([...data, {name, email}]);   //splice method
    setName("");
    setEmail("");
  };

  // remove data
  const removeItem = (index) =>{
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      {/* form section..... */}
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField  value={name} onChange={(event) => setName(event.target.value)}  id="outlined-basic" label="Name" variant="outlined" />
          <TextField  value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

{/* data show section...... */}
      <div className='data'>
        <div className='data_val'>
            <h4>Name</h4>
            <h4>Email</h4>
            <h4>Remove</h4>
        </div>
        {
           data.map((element, index)=>{
            return(
                // <Datashow name={element.name} email={element.email} index={element.index} 
                // data={data} setData={setData} />

                <div key={index}  className='data_val'>
                      <h4>{element.name}</h4>
                      <h4>{element.email}</h4>
                      <Stack>
                          <Button onClick={() =>removeItem(index)} variant="contained" color="error">
                              <DeleteIcon />
                          </Button>
                      </Stack>
                </div>
            )
           })
        }
      </div>
    </div>
  );
}

export default App;
