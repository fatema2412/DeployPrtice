import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Page/Home'
import Moives from './Page/Moives'
import Logut from './Page/Logut'
import PrivateRoute from './componets/PrivateRoute/PrivateRoute'
import MoiveDetails from './Page/MoiveDetails'
import AddMoives from './Page/AddMoives'
import EditMoives from './Page/EditMoives'

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/moive" element={
      <PrivateRoute>
      <Moives/>
      </PrivateRoute>
      }></Route>
     <Route path="/logut" element={<Logut/>}></Route>
     <Route path="/moive/:id" element={
      <PrivateRoute>
      <MoiveDetails/>
      </PrivateRoute>
      }/>

   <Route path="/add-moive" element={
      <PrivateRoute>
      <AddMoives/>
      </PrivateRoute>
      }/>
         <Route path="/editmoive/:id" element={
      <PrivateRoute>
      <EditMoives/>
      </PrivateRoute>
      }/>


     

    </Routes>
    </>
  )
}

export default App
