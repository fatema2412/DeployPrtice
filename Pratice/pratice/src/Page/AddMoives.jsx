import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const initalObj={
    title:"", genre:"",poster:"",releaseDate:"",description:""
}

export default function AddMoives() {
    const [data,setData]=useState(initalObj)
    const navigate=useNavigate()

    const handleInput=(e)=>{
     const {name,value} = e.target
     setData({...data, [name] :value})
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(data)
      const postData=()=>{
      axios.post("https://trusted-luck-wedge.glitch.me/data",data)
      .then((response)=>{
        console.log(response.data)
        navigate("/moive") })
    .catch((err)=> console.log(err.message))
      }
      postData()
    }
  return (
     <>
     <form onSubmit={handleSubmit}>
        <input type="text" value={data.title} name="title" placeholder="Enter Title" onChange={handleInput}/>
        <input type="text" value={data.poster} name="poster" placeholder="Enter posterUrl" onChange={handleInput}/>
        <input type="date" value={data.releaseDate} name="releasedate" placeholder="Enter RealseDate" onChange={handleInput}/>
        <input type="text" value={data.genre} name="genre" placeholder="Enter Genre" onChange={handleInput}/>
        <input type="text" value={data.description} name="description" placeholder="Enter Description" onChange={handleInput}/>
        <input type="submit" value="Add Moive"/>
      </form>
     </>
  )
}
