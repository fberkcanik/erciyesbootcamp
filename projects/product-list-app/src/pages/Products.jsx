import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavItem } from '../store/favSlice'
import { Link } from 'react-router-dom'
function Products() {
    const [productsList, setProductsList] = React.useState([])
    React.useEffect(() => {
        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => setProductsList(data))
    }, [])

    const dispatch = useDispatch()
    const insertFav = (product) => {
        dispatch(addFavItem(product))
        
    }
    const favs = useSelector(state => state.fav.favItems);

    let favCount = favs.length;

  return (
   <>
   <Link to={'/favs'}>Favorites ({favCount})</Link>
   <table>
        <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th>Units In Stock</th>
        </tr>
        </thead>
        <tbody>
        {productsList.map(product => {
            return (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td><Link to={`product/${product.id}`}>{product.name}</Link></td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td><button onClick={()=> insertFav(product)}>Add To Fav</button></td>
            </tr>
            )
        })}
        </tbody>
   </table>
   </>
  )
}

export default Products