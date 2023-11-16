import React from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'

function Home() {
    
  return (
    <>
        <h1>Home</h1>

        <table style={{width: '100%', textAlign: 'center', border:'1px solid'}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td><Link to={`product/${product.id}`}  >{product.name}</Link></td>
                            <td>{product.unitPrice}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
  )
}

export default Home