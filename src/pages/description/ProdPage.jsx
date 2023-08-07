import React from 'react'
import DescProduct from './description'

function ProdPage(id) {
  return (
    <div>
      <DescProduct key={id} />
    </div>
  )
}

export default ProdPage
