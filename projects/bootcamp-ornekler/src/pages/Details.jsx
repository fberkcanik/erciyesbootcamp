import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Details() {

    const {id} = useParams()
    const [details, setdetails] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`)
        .then(res => {
            setdetails(res.data)
            setloading(false)
        })
        .catch(err => {
            console.log(err)
        })
    })
  return (
    <>
    {
        loading ? <div>Loading...</div> : 
        <div>
            <h3>Details</h3>
            <p>Product Name: {details.name}</p>
            <p>Price: {details.unitPrice}</p>
            <p>Stock: {details.unitsInStock}</p>
            <p>Quantity per Unit: {details.quantityPerUnit}</p>
            <Link to='/'>Back to Products</Link>
        </div>
    }
    </>
  )
}

export default Details