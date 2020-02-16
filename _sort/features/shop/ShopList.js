import React, { useContext } from "react"
import { ShopContext } from './ShopContext'

function ShopList() {
  const [state, setState] = useContext(ShopContext)
  const { filteredProducts, products } = state

  return (
    <>
      <h4>Products</h4>
      <ul>
        {products && products.map(product => <li key={product.order}>{product.title}</li>)}
      </ul>
      <h4>Filtered Products</h4>
      {filteredProducts.length === 0 && <p>There are no filtered products</p>}

      <ul>
        {filteredProducts && filteredProducts.map(product => <li key={product.order}>{product.title}</li>)}
      </ul>

    </>
  )
}

export default ShopList
