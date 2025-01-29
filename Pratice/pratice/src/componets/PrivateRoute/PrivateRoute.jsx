import React, { useContext } from 'react'
import {AuthContext} from '../../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {
const  {isAuthenticate}=useContext(AuthContext)
if(!isAuthenticate){
    return <Navigate to="/logut"/>
}
  return children
}
