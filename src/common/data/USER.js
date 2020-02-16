export const USER = {
  created: Date,
  displayName: "",
  photoURL: "",
  firstName: "",
  lastName: "",
  dietaryRestrictions: "",
  notifications: {
    email: true,
    sms: true
  },
  email: "",
  phone: "",
  lastUpdate: Date,
  role: ['retail', 'vip', 'wholesale'], // These are not clearly defined, but this is the direction we are leaning towards.
  billingAddress: {

  },
  shoppingCart: {
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
  },


}