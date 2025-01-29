import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Moives() {
    const [moive,setMoive]=useState([
      
    ])
    const [err,setErr]=useState(null)
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const [genre,setGenre]=useState()

    useEffect(()=>{
      const fetchHandle=()=>{
        axios.get("https://trusted-luck-wedge.glitch.me/data&_page",{
          params:{genre},
        })
        .then((res)=>setMoive(res.data))
        .catch((err)=> setErr(err.response.data))}
        fetchHandle()
    },[genre])
// Dynamically 
    const handleViewMore=(id)=>{
      axios.get (`https://trusted-luck-wedge.glitch.me/data/${id}`)
      navigate(`/moive/${id}`)
  

    }
    // Delete
    const handleDelete=(id)=>{
      const fetchDelete= async()=>{
        console.log("delete")
        try{
        await  axios.delete(`https://trusted-luck-wedge.glitch.me/data/${id}`)
        setMoive(moive.filter((ele)=>ele.id !=id) )
      } catch(err){
      console.log(err)
      }

      }
      fetchDelete()
    }
  return (
    <div>
      <select onChange={(e)=>(setGenre(e.target.value))} value={genre}>
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Romance">Romance</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
      </select>
      <button onClick={()=>(navigate("/add-moive"))}>Add Moive</button>
      <h1>This is moives</h1>
      {loading && <p>Loading </p>}
      {moive.map((element)=>{
     return(
      <div key={element.id}> 
        <img src={element.poster} alt= {moive.name}/>
        <h3>{element.title}</h3>
        <h2>{element.releaseDate}</h2>
        <h3>Gener {element.genre}</h3>
        <p>Release {element.releaseDate}</p>
        <div>
          <button className="edit-btn" onClick={()=>(navigate(`/editmoive/${element.id}`))} >Edit</button>
          <button className= "delete-btn" onClick={()=>handleDelete(element.id)}>Delete</button>
          <button className= "view-btn" onClick={()=>handleViewMore(element.id)}>View More</button>

        </div>
        </div>
     )
      })}
      {err && <p>{err}</p>}


      
    </div>
  )
}
