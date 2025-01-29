import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function MoiveDetails() {
    const {id} =useParams()
    const [moive,setMoive]=useState()
    const [error,setError]=useState(null)
    useEffect(()=>{
      const fetchHandle=()=>{
      axios.get(`https://trusted-luck-wedge.glitch.me/data/${id}`) 
    .then((res)=> setMoive(res.data))
    .catch((err)=> setError(err.response.message)) }
    fetchHandle()

    },[id])

  return (
    <div>
      {error && <p>{error}</p>}
     {moive ? (    <div>
      <img src={moive.poster} alt="moivePoster"/>
      <h2>{moive.title}</h2>
      <h6>{moive.genre}</h6>
      <p>{moive.description}</p>
      <p>{moive.releaseDate}</p>
    </div>
) :(    <p>Loading...</p>
) }
    </div>
  )
}
