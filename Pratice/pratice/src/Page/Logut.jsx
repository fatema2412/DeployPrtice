import React, { useContext, useState } from 'react'
import axios from 'axios'
import {AuthContext} from "../Context/AuthContextProvider.jsx";
import "../Styles/logout.css"

export default function Logut() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [err,setErr]=useState(null)
  const [token,setToken]=useState("")
  const {login}=useContext(AuthContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("i am clicked")
    axios.post("https://trusted-luck-wedge.glitch.me/users",{
        username,password
    })
    .then((res) => {
          console.log(res.data)   
          const {token}=res.data   
          login(token)         
      })
      
    .catch((err)=> setErr(err))


  }
  return (
<div className="login-container">
    <h1>Login</h1>
<form onSubmit={handleSubmit}>
<input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder="Enter username"/>
<input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" placeholder="Enter password"/>
<input type="submit" value="submit"/>
</form>
{/* {err && <p>{err}</p>} */}

</div>
  )
}
