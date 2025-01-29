import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate()
    const [data,setData]= useState([])
    const [error,setError]=useState("") 
    const [loading,setLoading] =useState(true)
    useEffect(()=>{
        setLoading(true)
        axios.get("https://trusted-luck-wedge.glitch.me/employees")
    .then((res)=> setData(res.data)) 
    .catch((err)=> setError((err.response ? err.response.data: err.message)))
    .finally(()=>(setLoading(false)))
    
    },[])
    

    const handleDelete=(id)=>{
      axios.delete (`https://trusted-luck-wedge.glitch.me/employees/${id}`)
      .then(()=>{
      setData((prevData)=>prevData.filter((item)=> item.id !==id ))})
      .catch(()=>{
        console.log(Error)
      })
    }
    
  return (
    <>  
    {error && <h2>{error}</h2>} 
    {loading && <h3>Loading...</h3>}
    {data.map((elememt)=>{
     return(
      <div key={elememt.id}>
        <h3>{elememt.name}</h3>
        <h4>{elememt.designation}</h4>
        <h6>{elememt.department}</h6>
        <button onClick={(()=>(handleDelete(elememt.id)))}>Delete</button>

      </div>
     )
    })}
    <button onClick={()=>(navigate("/login"))}>Add Employes</button>

    </>

  )
}
