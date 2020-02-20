import React from 'react'
import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const AddToCart = () => {
  useFirestoreConnect('products')
  const activeProduct = useSelector(
    state => state.firestore.ordered.products,
  )

  console.log(activeProduct && activeProduct[0])

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* {JSON.stringify(products, null, 2)} */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddToCart
