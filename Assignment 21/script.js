
const onlineStore = {
    storeName: "TechWorld Online Store",
    location: "New York, NY",
    categories: ["Laptops", "Smartphones", "Accessories"],
  
    products: [
      {
        id: 1,
        name: "MacBook Pro",
        category: "Laptops",
        price: 1299.99,
        stock: 50,
        details: {
          brand: "Apple",
          model: "MacBook Pro 16-inch",
          color: "Silver",
          screenSize: "16 inches"
        }
      },
      {
        id: 2,
        name: "iPhone 13",
        category: "Smartphones",
        price: 799.99,
        stock: 100,
        details: {
          brand: "Apple",
          model: "iPhone 13",
          color: "Graphite",
          screenSize: "6.1 inches"
        }
      },
      {
        id: 3,
        name: "Wireless Mouse",
        category: "Accessories",
        price: 29.99,
        stock: 200,
        details: {
          brand: "Logitech",
          model: "MX Master 3",
          color: "Black",
          type: "Wireless"
        }
      }
    ],
  
    customers: [
      {
        id: 1,
        firstName: "Muhammad",
        lastName: "Ahmed",
        email: "ahmed@example.com",
        phoneNumber: "123-456-7890",
        address: {
          street: "123 Main St",
          city: "New York",
          state: "NY",
          zipCode: "10001"
        },
        orders: [
          {
            orderId: 101,
            date: "2024-11-01",
            status: "Shipped",
            totalAmount: 1599.98,
            products: [
              {
                productId: 1,
                quantity: 1,
                price: 1299.99
              },
              {
                productId: 3,
                quantity: 1,
                price: 29.99
              }
            ]
          },
          {
            orderId: 102,
            date: "2024-11-05",
            status: "Processing",
            totalAmount: 799.99,
            products: [
              {
                productId: 2,
                quantity: 1,
                price: 799.99
              }
            ]
          }
        ]
      },
      {
        id: 2,
        firstName: "Majid",
        lastName: "Khan",
        email: "majid@example.com",
        phoneNumber: "987-654-3210",
        address: {
          street: "456 Oak Ave",
          city: "San Francisco",
          state: "CA",
          zipCode: "94102"
        },
        orders: [
          {
            orderId: 103,
            date: "2024-11-02",
            status: "Delivered",
            totalAmount: 859.98,
            products: [
              {
                productId: 2,
                quantity: 1,
                price: 799.99
              },
              {
                productId: 3,
                quantity: 2,
                price: 29.99
              }
            ]
          }
        ]
      }
    ]
  };
  
 console.log(onlineStore);
  