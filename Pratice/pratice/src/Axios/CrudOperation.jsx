import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CrudOperation() {
    const [employees,setEmployes]=useState([])
    const [showForm,setShowForm]=useState(false)
    const [newemployes,setNewemployes]=useState({name:"",designation:"",department:""})

    useEffect(()=>{
        axios.get("https://trusted-luck-wedge.glitch.me/employees")
        .then((res)=>setEmployes(res.data))
        .catch((err)=> console.log (err))
    },[])

    const handleInputChange=(e)=>{
        setNewemployes({...newemployes,[e.target.name]:e.target.value})
       }
    

    const addEmployee=(e)=>{
        e.preventDefault()
    axios.post("https://trusted-luck-wedge.glitch.me/employees",newemployes)
    .then((res)=> {
        setEmployes([...employees, res.data]);
        setNewemployes({name:"",designation:"",department:""})
        setShowForm(false)
     })
     .catch((err)=> console.log(err))
    }
  const deleteEmployee=(id)=>{
    axios.delete("https://trusted-luck-wedge.glitch.me/employees")
    .then(()=>{
        setEmployes(employees.filter((elememt)=>{
            elememt.id != id 
        })) 
    .catch((err)=>console.log(err))
    })
  }

  return (
    <>
    {showForm && (
        <form onSubmit={addEmployee} style={{ marginTop: '20px' }}>
          <input
            type="text"
            name="name"
            value={newemployes.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="designation"
            value={newemployes.designation}
            onChange={handleInputChange}
            placeholder="Designation"
            required
          />
          <select
            name="department"
            value={newemployes.department}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
          </select>
          <button type="submit">Add Employee</button>
        </form>
      )}
 </>
  )
}

