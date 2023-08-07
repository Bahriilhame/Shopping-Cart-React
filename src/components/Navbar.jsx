import React from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div
      style={{
        padding: 25,
        marginBottom: 40,
        backgroundColor: '#ffe641',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1
          style={{
            display: 'inline',
            color: '#333',
          }}
        >
          Shopping Cart React
        </h1>
      </Link>
      <Link to="/cart">
        <ShoppingCart
          size={32}
          style={{ position: 'absolute', right: 50, color: '#333' }}
        />
      </Link>
    </div>
  )
}

export default Navbar
