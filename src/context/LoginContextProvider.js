import React, { useState } from 'react'
import { createContext } from 'react';

export const LoginContext= createContext()
const LoginContextProvider = ({children}) => {
  const [userdetail,setUserdetail]=useState(true)
  return (
    <LoginContext.Provider value={userdetail}>
    {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider