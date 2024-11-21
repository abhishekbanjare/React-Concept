import { createContext } from 'react'   //create context function
import { useState } from 'react';



export const CounterContext = createContext(null);      //here we have create context


// provider.......................
export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    return(
        <CounterContext.Provider value={{count, setCount, name:"Abhishek"}}>
           {props.children}
        </CounterContext.Provider>
    ) 
    
}

