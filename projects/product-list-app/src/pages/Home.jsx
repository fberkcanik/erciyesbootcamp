import React from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


function Home() {


    //connect to context
    const [cart, setCart] = useContext(CartContext)

    //add to cart
    const addToCart = (product) => {
        //cart is not iterable?
        setCart([...cart, product])
    }
  

  return (
    <>
        <ul style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
        <h1>Home</h1>

        <table style={{width: '', textAlign: 'center', border:'1px solid'}}>
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
                            <td><button onClick={()=>addToCart(product)}>Add To Cart</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
  )
}

export default Home