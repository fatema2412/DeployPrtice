import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/navbar.css"
import { AuthContext } from '../Context/AuthContextProvider'

export default function Navbar() {
    const {isAuthenticate,logout}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleLogout=()=>{
        logout() 
        
    }
  return (
    <nav className="navbar">
        <Link to="/" className="navbar-left">Home</Link>
        <Link to="/moive">Moive</Link>
 {isAuthenticate ? <button onClick={handleLogout}>Logut</button> :<button onClick={()=>navigate("/logut")}>Login</button>}
        {/* <Link to="/logut">Logut</Link> */}  

    </nav>
  )
}
