import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ProductMang() {
    const [product,setProduct]=useState([])
    const [showForm,setShowForm]=useState(false)
    const [newProduct,setNewProduct]=useState({Name:'',Category:"",Price:'',checkbox:""})

    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((response)=>{setProduct(response.data)
           console.log(response.data)
        })
        .catch((error)=> console.log(error))
    },[])

    const handleDelete=(e)=>{
       axios.delete(`http://localhost:3000/products/${e}`)
       .then((response)=> {
     setProduct(product.filter((element)=> element.id != e))
       })
       .catch((error)=> console.log(error.response))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
       axios.post("http://localhost:3000/products",newProduct)
       .then((response)=> setProduct([...product,newProduct]))
       .catch((error)=> console.log(error))
    }
    const handleInput=(e)=>{
        let {name,value,checked}=e.target
        setNewProduct({...newProduct,[name]:checked ? checkbox : value})


    }

  return (
    <>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>

            </tr>
        </thead>
        <tbody>
        {product.map((element)=>(

            <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.category}</td>
                <td>{element.price}</td>
                <td>
                <button onClick={()=>(handleDelete(element.id))}>Delete</button>
                </td>
  
            </tr>
                ))}

        </tbody>
      </table>
      <button onClick={()=>(setShowForm(!showForm))}>Add Items</button>
   {showForm && <form onSubmit={handleSubmit}> 
    <input type="text" name="Name" value={newProduct.Name} onChange={handleInput} placeholder="Enter Name of Product" />
   <input type="text" name="Category" value={newProduct.Category} onChange={handleInput} placeholder="Enter Category of Product"/>
   <input type="number" name="Price" value={newProduct.Price} onChange={handleInput} placeholder="Enter Price of Product"/>
   <input type="checkbox"  checked name="checkbox"  value={newProduct.checkbox} onChange={handleInput} placeholder="Would you reccommonded the product ?" />  
   <input type="submit" value="Submit"/> 
 </form>
   }

    </>
  )
}
