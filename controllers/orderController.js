const store = require('../storage/store');
const {
  generateDiscountCode,
  applyDiscount,
} = require('../utils/discountUtils');

exports.checkout = (req, res) => {
  const { userId, discountCode } = req.body;
  const cart = store.carts[userId] || [];
  if (cart.length === 0)
    return res.status(400).json({ error: 'Cart is empty!' });

  // Calculate total price
  let total = cart.reduce((sum, item) => {
    const product = store.products.find((p) => p.id === item.productId);
    return sum + product.price * item.quantity;
  }, 0);

  // Apply discount if provided
  if (discountCode) total = applyDiscount(discountCode, total);

  const orderId = store.orders.length + 1;
  store.orders.push({ orderId, userId, totalAmount: total, items: cart });
  delete store.carts[userId]; // Clear cart after checkout

  res.json({ message: 'Order placed!', orderId, total });
};

exports.generateDiscount = (req, res) => {
  const discountCode = generateDiscountCode();
  if (!discountCode)
    return res.json({ message: 'Not eligible for a discount code yet!' });

  res.json({ message: 'Discount code generated!', discountCode });
};
