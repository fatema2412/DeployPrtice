import axios from 'axios'
import React, { useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const initalObj={
    title:"", genre:"",poster:"",releaseDate:"",description:""
}


export default function EditMoives() {
    const {id}=useParams()
    const [data,setData]=useState(initalObj)
    const navigate=useNavigate()

    useEffect(()=>{
        const fetchHandle=()=>{
          axios.get(`https://trusted-luck-wedge.glitch.me/data/${id}`)
          .then((res)=>setData(res.data))
          .catch((err)=> setErr(err.response.data))}
          fetchHandle()
      },[])
  

    const handleInput=(e)=>{
     const {name,value} = e.target
     setData({...data, [name] :value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(data)
      const postData=()=>{
      axios.put(`https://trusted-luck-wedge.glitch.me/data/${id}`,data)
      .then((response)=>{
        console.log(response.data)
        navigate("/moive") })
    .catch((err)=> console.log(err.message))
      }
      postData()
    }
  return (
     <>
     <h3>Welcome {id} Edit </h3>
     <form onSubmit={handleSubmit}>
        <input type="text" value={data.title} name="title" placeholder="Enter Title" onChange={handleInput}/>
        <input type="text" value={data.poster} name="poster" placeholder="Enter posterUrl" onChange={handleInput}/>
        <input type="date" value={data.releaseDate} name="releasedate" placeholder="Enter RealseDate" onChange={handleInput}/>
        <input type="text" value={data.genre} name="genre" placeholder="Enter Genre" onChange={handleInput}/>
        <input type="text" value={data.description} name="description" placeholder="Enter Description" onChange={handleInput}/>
        <input type="submit" value="Edit Moive"/>
      </form>
     </>
  )
}
