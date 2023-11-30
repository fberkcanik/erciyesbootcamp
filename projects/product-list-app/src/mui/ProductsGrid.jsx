import React, { useEffect, useState } from 'react'

import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
function ProductsGrid() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const deleteProduct = (id) => {
        window.confirm('Are you sure?')
        fetch(`https://northwind.vercel.app/api/products/${id}`, {
            method: 'DELETE'
        })
        //table refresh
        .then(() => {
            fetch('https://northwind.vercel.app/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        })
            
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Product Name', width: 200 },
        { field: 'unitPrice', headerName: 'Unit Price', width: 130 },
        { field: 'quantityPerUnit', headerName: 'Quantity Per Unit', width: 200 },
        { field: 'unitsInStock', headerName: 'Units In Stock', width: 130 },
        { field: 'delete', headerName: 'Delete', width: 100, renderCell: (params) => (
        <Button color='error' variant='contained' onClick={() => deleteProduct(params.row.id)}>Delete</Button>)}
    ];
  return (
   <>
   <DataGrid
    rows={products}
    refresh={true}
    columns={columns}
   />
   </>
  )
}

export default ProductsGrid