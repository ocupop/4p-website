export const BAG_DATA = [
  // bag 1
  {
    id: 'ssd2sHkD3',
    name: 'Dairy Bag',
    featuredImage: 'absolute/path/to/image',
    tags: ['tag1', 'tag2', 'tag3'],
    department: 'dairy',
    category: 'Eggs',
    description:
      'Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed nisl. Fusce id magna nulla. Curabitur quis magna ante. et nunc urna.',
    variant: [
      {
        id: 'sdsg34Df23',
        label: 'Just some eggs',
        price: 20.0,
        name: 'Mini',
        recurringPurchase: true,
        singlePurchase: true,
        available: true,
        vendor: {
          name: '4P Foods',
          id: 123,
        },
      },
      {
        id: '2344sd',
        price: 25.0,
        name: 'Regular',
        label: 'Full of eggs',
        recurringPurchase: true,
        singlePurchase: true,
        available: true,
        vendor: {
          name: '4P Foods',
          id: 123,
        },
      },
    ],
  },
  // bag 2
  {
    id: 'FG33edf',
    name: 'Produce Bag',
    featuredImage: 'absolute/path/to/image',
    tags: ['tag1', 'tag2', 'tag3'],
    department: 'Produce',
    category: 'Fruits',
    description:
      'Donec ac mattis elit. Duis massa sapien, gravida ac commodo a, ultricies sed nisl. Fusce id magna nulla. Curabitur quis magna ante. et nunc urna.',
    variant: [
      {
        id: 'CXgv43',
        label: '1-2 People',
        price: 20.0,
        name: 'Small Bag',
        recurringPurchase: false,
        singlePurchase: true,
        available: true,
        vendor: {
          name: '4P Foods',
          id: 123,
        },
      },
      {
        id: 'XCVer3',
        price: 25.0,
        name: 'Medium Bag',
        label: '3-4 People',
        recurringPurchase: true,
        singlePurchase: false,
        available: true,
        vendor: {
          name: '4P Foods',
          id: 123,
        },
        {
          id: 'GHJ4wd',
          price: 23.0,
          name: 'Large Bag',
          label: '5-6 People',
          recurringPurchase: true,
          singlePurchase: true,
          available: true,
          vendor: {
            name: '4P Foods',
            id: 123,
          },
      },
    ],
  },
]
