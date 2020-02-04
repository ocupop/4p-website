export const CART_DATA = {
  cartTotal: 123.00,
  bags: [
    {
      id: "lkjsfdlsakj",
      name: "Small Dairy Bag",
      type: "automated", // recurring, single, automated
      bagPrice: 25.00,
    },
    {
      id: ";lka;i",
      name: "One-Time Purchases",
      type: "single", // recurring, single, automated
      bagPrice: null,
      items: [
        {
          variantID: "lkajflsakj",
          productID: "lkajdf",
          title: "Eggs",
          size: 12,
          unit: "egg",
          price: 12345,
          quantity: 4,
          featuredImage: "absolute/path/to/image"
        },
      ]
    },
    {
      id: "lkhnn",
      name: "Recurring Items",
      type: "recurring", // recurring, single, automated
      items: [
        {
          variantID: "lkajflsakj",
          productID: "lkajdf",
          title: "Eggs",
          size: 12,
          unit: "egg",
          price: 12345,
          quantity: 4,
          featuredImage: "absolute/path/to/image"
        },
      ]
    }
  ]
}