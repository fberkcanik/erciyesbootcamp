import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
function EffectSample() {
    const [categories, setCategories] = useState([])
   useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setCategories(res.data);
    });
   },[])
  return (
    <div>{categories.map((category) => <li>{category.name} </li>)}</div>
  )
}

export default EffectSample