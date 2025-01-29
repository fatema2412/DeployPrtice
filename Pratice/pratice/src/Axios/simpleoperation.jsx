import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Simpleoperation() {

    const [items,setitems]=useState([])
//  axios.post("https://trusted-luck-wedge.glitch.me/employees",{
//     name:"New Items",
//     desprication:"New items added"
//  })
//  .then( res=> console.log (res.data))
//  .catch( err=> (console.log(err)))
useEffect(()=>{
axios.get("https://fakestoreapi.com/products")
.then((res)=> setitems(res.data))
.catch((error)=> console.log(error)) 
})

const addItem=()=>{
  console.log("clicked")
axios.post("https://fakestoreapi.com/products",{id: items.length + 1,
name:"New items",
desprication:"New items added"})
.then((res)=> setitems([...items, res.data])


)
.catch((err)=> console.log(err))
}
  return (
    <>
        {items.map((elememt)=>{
     return(
      <div key={elememt.id}>
        <h3>{elememt.title}</h3>
        <h4>{elememt.description}</h4>
        {/* <button onClick={(()=>(handleDelete(elememt.id)))}>Delete</button> */}
        <button onClick={addItem}>Add Item</button>


      </div>
     )
    })}
    
        <button onClick={addItem}>Add Item</button>


    </>
  )
}
