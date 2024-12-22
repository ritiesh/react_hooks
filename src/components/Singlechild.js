import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContextProvider'
const Singlechild = () => {
  const login = useContext(LoginContext)
  console.log(login)
  return (

    <div>Singlechild</div>
  )
}

export default Singlechild