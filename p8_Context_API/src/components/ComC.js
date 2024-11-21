import React, {useContext, useState} from 'react';
import {AppState} from '../App';
import './Compabc.css';

const ComC = () => {
  const AppData = useContext(AppState)
  return (
    <div className='compc'>
       <div>ComC</div>
       {/* <h1>No Data</h1>  */}
       <h1>{AppData.data}</h1>
       <h1>name: {AppData.name.name}</h1>
       <h1>age:{AppData.name.age}</h1>
    </div>
  )
}

export default ComC