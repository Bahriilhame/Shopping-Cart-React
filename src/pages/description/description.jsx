import { useState, useEffect } from 'react'
import React from 'react'

function DescProduct({ id = 1 }) {
  const [Desc, setDesc] = useState(null)
  const url = 'https://fakestoreapi.com/products'

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url)
        const products = await response.json()

        const prod = products.filter((product) => {
          return product.id === id
        })
        console.log('====================================')
        console.log(prod)
        console.log('====================================')
        setDesc(prod)
      } catch (error) {
        // console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [id])

  console.log(Desc)

  return (
    <div>
      <div>
        <img src={Desc[0].image} alt="" style={{ width: 1200 }} />
      </div>
    </div>
  )
}

export default DescProduct
