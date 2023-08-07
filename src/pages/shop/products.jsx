import React, { useState, useEffect } from 'react'
import '../../App.css'
import ProdPage from '../description/ProdPage'
import { Link } from 'react-router-dom'
// import { Path } from 'phosphor-react'

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

  return (
    <div className="shop">
      <div className="products">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`../description/ProdPage/${product.id}`}
            element={<ProdPage />}
          >
            <div className="product">
              <div>
                <a
                  href={product.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={product.image}
                    alt={product.description}
                    className="image"
                  />
                </a>
              </div>
              <br />
              <div className="product-details">
                <a className="linkImage">{product.title}</a>
                <h2>{product.price}DH </h2>
              </div>
              <button>Add To Cart</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductsFetch
