import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
          e.preventDefault()   //value url/post method ke thrue kahin chali jati hai jo mai nahi chahta
          setUser({username, password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type='text' 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)}
            placeholder='username'
        />
        {" "}
        <input type='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder='password'
            />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;