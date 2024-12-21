const store = {
  products: [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
    { id: 3, name: 'Product C', price: 300 },
  ],
  carts: {}, // Example: { userId: [{ productId: 1, quantity: 2 }] }
  orders: [], // Example: [{ orderId: 1, userId: '123', totalAmount: 500 }]
  discountCodes: [], // Example: [{ code: 'DISCOUNT-5', used: false }]
};

module.exports = store;
