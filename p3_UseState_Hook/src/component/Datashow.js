import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';

const Datashow = ({name, email, index, setData}) => {  //propes distructuring
    // remove data
    const removeItem = () =>{
        let arr = data;
        arr.splice(index, 1);
        setData([...arr]);
    }
    return(
        <div className='data_val'>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <Stack>
                <Button variant="contained" color="error">
                    <DeleteIcon />
                </Button>
            </Stack>
        </div>
    )
}
export default Datashow;