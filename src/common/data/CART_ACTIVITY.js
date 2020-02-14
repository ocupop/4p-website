export const CART_HISTORY = [
  {
    timestamp: Date,
    userID: "",
    userName: "",
    action: "",
    cart: {
      cartPrice: 0.00,
      deliveryAddress: {

      },
      lastUpdate: Date,
      items: [
        {
          productID: "",
          variantID: "",
          price: 0.00,
          cost: 0.00,
          quantity: 0,
          title: "",
          featuredImageUrl: "",
          recurring: false
        }
      ]
    }
  }
]