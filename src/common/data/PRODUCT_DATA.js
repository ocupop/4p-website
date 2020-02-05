export const PRODUCT_DATA = [
  {
    id: 'e34dfs4',
    name: 'Reduced Fat Milk',
    category: 'Milk',
    department: 'Dairy',
    description:
      'Clover Organic Farms sources its rBST and antibiotic-free milk and cream from a select group of small, organic family farms on the North Coast of California. Our milk and cream arrives at the plant the same day the cows are milked and it is fresh pasteurized* to ensure quality while preserving its fresh farm taste and nutritional value. In 2000, we became the first U.S. dairy processor to be awarded the American Humane Certified label for humanely produced dairy products by the American Humane Association. We invite you to enjoy Clover Organic Farms Milk and Cream products in a good conscience and good health!',
    tags: [
      'CERTIFIED ORGANIC',
      'NON-GMO VERIFIED',
      'NUT-FREE',
      'SOY-FREE',
      'LOCAL',
    ],
    ingredients: [
      'Certified organic grade A reduced fat milk',
      'certified organic nonfat dry milk',
      'vitamin A palmitate',
      'vitamin D3',
    ],
    variants: [
      {
        id: 'sdd24',
        name: 'Organic 2% Reduced Fat Milk',
        featuredImage: 'https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_1280.jpg',
        price: 3.99,
        size: 1,
        unit: 'half gallon',
        recurringPurchase: false,
        singlePurchase: true,
        vendor: {
          name: 'Clover Sonoma',
          id: '32dsf35',
        },
      },
      {
        id: '3SD23d',
        name: 'Organic 2% Fat Milk',
        featuredImage: 'https://cdn.pixabay.com/photo/2016/12/06/18/27/milk-1887234_1280.jpg',
        price: 6.99,
        size: 1,
        unit: 'gallon',
        recurringPurchase: true,
        singlePurchase: true,
        vendor: {
          name: 'Clover Sonoma',
          id: '32dsf35',
        },
      },
    ],
  },
  {
    id: 'DsF34',
    name: 'Pasta Sauce',
    category: 'Pasta & Sauce',
    department: 'Pantry',
    featuredImage:'https://image.shutterstock.com/image-photo/fettuccine-pasta-shrimp-tomatoes-herbs-600w-283021049.jpg',
    ingredients: [
      'Tomatoes',
      'Tomato Puree',
      'Extra Virgin Olive Oil',
      'Garlic',
      'Sea Salt',
      'Basil',
      'Organic Ingredient',
    ],
    description:
      'Produced from 5 simple organic ingredients, this well-balanced restaurant quality marinara sauce has the full flavor, robust texture, and subtle sweetness of vine-ripened tomatoes harvested at their peak season best.',
    tags: ['tag1', 'tag2'],
    variants: [
      {
        name: 'Organic Marinara Sauce',
        price: 5.99,
        size: 24,
        unit: 'oz',
        vendor: {
          name: 'Bianco Di Napoli',
          id: '32udjf3',
        },
      },
    ],
  },
]
