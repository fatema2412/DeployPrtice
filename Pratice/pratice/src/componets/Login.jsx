import axios from 'axios'
import React, { useState } from 'react'

    export default function Login() {
        const [inputForm,setInputForm]=useState(
            {
                id:Math.ceil(Math.random()*200),
                name:"",designation:"",post:""})
    const [responseMessage, setResponseMessage] = useState("");
        const [error,setError]=useState("") 
       const [data,setData]= useState([])
        
    

    
        const handleInput=(e)=>{
             const {name,value}= e.target
             setInputForm({...inputForm,[name]:value})
        
            }
      const handleSubmit=(e)=>{
        e.preventDefault()
    axios 
    .post ("https://trusted-luck-wedge.glitch.me/employees",inputForm)
    .then(()=>{
     setResponseMessage("Employee details added successfully!")
     setData((prevData) => [...prevData, response.data]); // Add the new employee to the state

     setInputForm({
        id:Math.ceil(Math.random()*200),
        name:"",designation:"",post:""})
     .catch((err)=>setError((err.response ? err.response.data: err.message)))
     })
    
 };
 

        

    

        
    
  return (
    <div>

      
       <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Enter your Name" value={inputForm.name}
       name="name" onChange={handleInput}
       />
       <input type="text" placeholder="Enter your Designation " value={inputForm.designation}
       name="designation" onChange={handleInput}
       />
       <select onChange={handleInput} name="post" value={inputForm.post}>
       <option value="">Select Department</option>

        <option value="It">IT</option>
        <option value="HR">HR</option>
        <option  value="Marketing">Marketing</option>

       </select>
       <input type="submit" value ="Add Employes Details"/>
       </form>
       {responseMessage && <p>{responseMessage}</p>}
    </div>

    // }
  )
}
