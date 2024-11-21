import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {  //   children: jo bhi children/div aa rahe hai usko asitice use kar lo
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;