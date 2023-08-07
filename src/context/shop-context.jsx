import React, { createContext, useState } from 'react'
import ProductsFetch from '../components/products'

export const ShopContext = createContext(null)

const products = ProductsFetch()
const getDefaultsCart = () => {
  const cart = {}
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}
function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultsCart())
  const addItems = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  const removeItems = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }
  const contextValue = { cartItems, addItems, removeItems }

  console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
