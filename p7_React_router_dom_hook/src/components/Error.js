import React from 'react'
import { useNavigate, Link } from 'react-router-dom' 

const Error = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>404 page not found error</div>
      <button onClick={()=> navigate(-1)}> Go Back</button>
    </>
  )
}

export default Error