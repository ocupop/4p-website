export const PRODUCT = {
  active: true,
  category: {
    label: "",
    value: ""
  },
  collection: false,
  department: {
    label: "",
    value: ""
  },
  description: { // This model is dictated by draftJS (Rich Editor)
    blocks: [

    ],
    entityMap: {}
  },
  featuredImage: {
    src: ""
  },
  ingredients: "",
  name: "",
  storageTips: "",
  tags: [
    {
      label: "",
      value: ""
    }
  ],
  sku: "",
  quantity: 0,
  trackProductInventory: true,
  variants: [
    {
      available: true,
      cost: 0.00,
      description: "",
      featuredImage: {
        src: ""
      },
      label: "",
      measurementSize: 0,
      measurementUnit: {
        label: "",
        value: ""
      },
      nutritionLabel: {
        src: ""
      },
      price: 0.00,
      quantity: 0,
      recurringPurchase: true,
      singlePurchase: true,
      size: "",
      sku: "",
      trackVariantInventory: true,
      vendorSKU: ""
    }
  ],
  vendor: {
    label: "",
    value: ""
  },
  created: Date,
  lastUpdate: Date
}


// https://stackoverflow.com/questions/47355540/firestore-adding-server-timestamp-field-to-the-object-which-being-added
