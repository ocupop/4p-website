export const CART_DATA = {
  cartTotal: 123.0,
  cartItems: [
    {
      variantID: 'lkajflsakj',
      productID: 'lkajdf',
      title: 'Eggs',
      size: 12,
      unit: 'egg',
      price: 12345,
      quantity: 4,
      featuredImage: 'absolute/path/to/image',
      type: 'product', // bag|product
      purchaseStatus: 'single', // single|reccuring
    },
    {
      variantID: '343WE23',
      productID: 'lkajdf',
      title: 'Eggs',
      size: 12,
      unit: 'egg',
      price: 12345,
      quantity: 4,
      featuredImage: 'absolute/path/to/image',
      type: 'product', // bag|product
      purchaseStatus: 'reccuring', // single|reccuring
    },
    {
      bagID: 'DF223',
      variantID: 'lkjsfdlsakj',
      title: 'Dairy Bag',
      type: 'bag', // bag|product
      purchaseStatus: 'single', // single|reccuring
      price: 25.0,
    },
  ],
}
