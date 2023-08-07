import React, { useContext } from 'react'
import '../../App.css'
import ProdPage from '../description/ProdPage'
import { Link } from 'react-router-dom'
import ProductsFetch from '../../components/products'
import ShopContext from '../../context/shop-context'

function Shop() {
  const products = ProductsFetch()
  const { addItems } = useContext(ShopContext)
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
              <button onClick={() => addItems(product.id)}>Add To Cart</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Shop
