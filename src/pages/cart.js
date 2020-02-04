import React from 'react'
import { graphql, Link } from 'gatsby'
import CartItem from '../components/cart/CartItem'
import CartCollection from '../components/cart/CartCollection'

const Cart = ({ data }) => {
  const allProducts = data.allProducts.edges
  const mockCollection1 = {
    title: 'Sample Products 1',
    id: 1,
    price: 20.00,
    variants: [
      allProducts[0].node.variants[1],
      allProducts[0].node.variants[0],
      allProducts[1].node.variants[0],
    ],
  }
  const mockCollection2 = {
    title: 'Sample Products 2',
    is: 2,
    price: 15.75,
    variants: [
      allProducts[0].node.variants[1],
      allProducts[1].node.variants[0],
    ],
  }
  const mockShoppingCart = {
    weeklyDelivery: {
      variants: [
        allProducts[0].node.variants[1],
        allProducts[0].node.variants[0],
        allProducts[1].node.variants[0],
      ],
      collections: [mockCollection1, mockCollection2],
    },
    oneTimePurchase: {
      variants: [
        allProducts[0].node.variants[0],
        allProducts[1].node.variants[0],
      ],
      collections: [mockCollection1],
    },
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <div className="cart-header d-flex align-items-center justify-content-between">
                  <h1 className="d-lg-inline-block">Your cart</h1>
                  <div className="delivery-details d-flex align-items-center">
                    <span className="text-uppercase">
                      Your next delivery
                      <strong>Wednesday 12/19</strong>
                    </span>
                    <a href="#">
                      <small>
                        Edit Delivery
                        <br />
                        Schedule
                      </small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="content">
                <h2>Your Weekly Delivery</h2>
                <p>
                  Delivery copy Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Aperiam, quos?
                </p>
              </div>
            </div>
          </div>

          {mockShoppingCart.weeklyDelivery.variants.map(variant => (
            <CartItem key={variant.sku} variant={variant} />
          ))}

          <hr class="row-border" />

          {mockShoppingCart.weeklyDelivery.collections.map(
            variantCollection => (
              <CartCollection key={variantCollection.id} collection={variantCollection} />
            ),
          )}

          <hr className="row-border" />
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2>Your One-Time Purchases</h2>
                <p>
                  Delivery copy Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Aperiam, quos?
                </p>
              </div>
            </div>
          </div>

          {mockShoppingCart.oneTimePurchase.variants.map(variant => (
            <CartItem key={variant.sku} variant={variant} />
          ))}

          <hr class="row-border" />

          {mockShoppingCart.oneTimePurchase.collections.map(
            variantCollection => (
              <CartCollection key={variantCollection.id} collection={variantCollection} />
            ),
          )}

          <hr className="row-border" />
          <div className="row">
            <div className="col-lg-6 ml-lg-auto">
              <div className="content">
                <div className="form-group row align-items-center">
                  <label
                    for="input-coupon-code"
                    className="col-sm-2 col-form-label">
                    Coupon Code
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="input-coupon-code"
                    />
                  </div>
                </div>
                <dl className="d-flex flex-wrap text-right">
                  <dt className="w-75">Subtotal</dt>
                  <dd className="w-25">$0.00</dd>
                  <dt className="w-75">Delivery Fee</dt>
                  <dd className="w-25">Free</dd>
                  <dt className="w-75">Total</dt>
                  <dd className="w-25">$0.00</dd>
                </dl>
                <a href="#" className="btn btn-secondary btn-block">
                  Check out for Wednesday 12/19
                </a>
                <p className="mt-3">
                  You have until{' '}
                  <span className="text-primary">Sunday 12/9 by midnight</span>{' '}
                  to edit your order
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    allProducts {
      edges {
        node {
          id
          department
          name
          variants {
            size
            unit
            price
            available
            nutritionalLabel
            description
            storageTips
            label
            name
            featuredImage
            quantity
            sku
            nutritionalFacts
          }
        }
      }
    }
  }
`

export default Cart
