export const ORDER = {
  userID: "",
  firstName: "",
  lastName: "",
  email: "",
  deliveryAddress: {
    // TBD: This may need to be a locationID
  },
  deliveryFee: 0.00,
  deliveryDate: Date,
  deliveryNotes: "",
  subtotal: 0.00,
  totalPrice: 0.00,
  totalCost: 0.00,
  dietaryRestrictions: "",
  items: [
    {
      variantID: "",
      sku: "",
      storageLocation: "",
      title: "",
      price: 0.00,
      cost: 0.00,
      quantity: 0
    }
  ],
  status: "",
  fulfilled: false,
  funded: true
}