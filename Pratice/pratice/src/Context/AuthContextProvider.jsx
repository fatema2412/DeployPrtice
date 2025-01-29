import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
 export const AuthContext=createContext()

export default function AuthContextProvider({children})  {
  const [isAuthenticate,setAuthenticated]=useState(()=>{
  return  localStorage.getItem("token")? true :false})
  
  const [token,setToken]=useState(null)
const navigate=useNavigate()
  const login=(authToken)=>{
    console.log(authToken)
    setAuthenticated(true)
    setToken (authToken)
    localStorage.setItem("token",authToken)
    navigate("/moive")
    // isAuthenticate to true , set token , navigate to home page
    

  }
 const logout=()=>{
        // isAuthenticate to false , set token , navigate to login page
  setToken(null)
  setAuthenticated(false)
  localStorage.removeItem("token")
  navigate("/logut")

    


 }
  return (
    <div>
      <AuthContext.Provider value={{token ,isAuthenticate, login, logout}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
