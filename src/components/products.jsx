import React, { useState, useEffect } from 'react'
import '../App.css'

const ProductsFetch = () => {
  const [products, setProducts] = useState([])

  const url = 'https://fakestoreapi.com/products'

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  console.log('products :', products)
  return products
}

export default ProductsFetch
