import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Products() {
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {
         
        axios.get('https://northwind.vercel.app/api/products')
        .then(res => {
            setProducts(res.data)
            setloading(false)
        })
        .catch(err => {
            console.log(err)
            
        })
    },[])
    const deleteProduct = (id) => {
        window.confirm('Are you sure?')
        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
  return (
    <>
    {
        loading ? <div>Loading...</div> : 
        <><h3>Count: {products.length}</h3>
        <table style={{width: '100%', tableLayout: 'auto', textAlign: 'center'}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UnitPrice</th>
                    <th>UnitInStock</th>
                    <th>QuantityPerUnit</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td><Link to={`/detail/${product.id}`}>{product.name}</Link></td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                            <td>{product.quantityPerUnit}</td>
                            <td><button onClick={()=>deleteProduct(product.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    }
    </>
  )
}

export default Products