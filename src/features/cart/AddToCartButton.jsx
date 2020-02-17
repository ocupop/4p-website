import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useCart from './useCart'
import { SINGLE_PURCHASE, RECURRING_PURCHASE } from '../../common/constants/CartPurchaseStatus'
import { unitize } from 'gsap/gsap-core'

const AddToCart = ({ children, cartType, cartPurchaseStatus, item, productId }) => {
  const { addToCart } = useCart({ author: { id: 123 } })
  const [buttonDisabled, isButtonDisabled] = useState(false)
  const [cartItem, setCartItem] = useState({});

  useEffect(() => {
    // if (
    //   (cartPurchaseStatus === SINGLE_PURCHASE && item.singlePurchase === false) ||
    //   (cartPurchaseStatus === RECURRING_PURCHASE && item.recurringPurchase === false)
    // ) {
    //   isButtonDisabled(true)
    // }
    console.log(item);

    const newItem = {
      productID: productId,
      variantID: item.id,
      title: item.name,
      size: item.size,
      unit: item.unit,
      price: item.price,
      // quantity: 
      featuredImage: item.featuredImage,
      type: cartType,
      purchaseStatus: cartPurchaseStatus
    }

    setCartItem(newItem);

  }, [item])

  return (
    <>
      <button
        type="button"
        className="product-button w-50"
        disabled={buttonDisabled}
        onClick={async () => {
          
          // console.log(cartItem);
          await addToCart(cartItem)
        }}>
        {children}
      </button>
    </>
  )
}

AddToCart.propTypes = {
  children: PropTypes.node,
  bagType: PropTypes.string,
  item: PropTypes.instanceOf(Object),
}

export default AddToCart
