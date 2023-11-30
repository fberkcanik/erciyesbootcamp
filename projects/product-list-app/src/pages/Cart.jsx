import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
    const [cart, setCart] = useContext(CartContext)

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id))
    }

  return (
    <>
        <h1>Cart</h1>
        <table style={{width: '', textAlign: 'center', border:'1px solid'}}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(product => {

                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.unitPrice}</td>
                            <td><button onClick={() => removeFromCart(product)}>Remove</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>
  )
}

export default Cart