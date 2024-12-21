const store = require('../storage/store');

// Add product to cart
exports.addToCart = (req, res) => {
  const { userId, productId, quantity } = req.body;
  if (!store.carts[userId]) store.carts[userId] = [];
  const product = store.products.find((p) => p.id === productId);
  if (!product) return res.status(404).json({ error: 'Product not found!' });

  // Update or add new item
  const cartItem = store.carts[userId].find(
    (item) => item.productId === productId
  );
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    store.carts[userId].push({ productId, quantity });
  }

  res.json({ message: 'Product added to cart!' });
};

// View cart
exports.viewCart = (req, res) => {
  const { userId } = req.params;
  res.json(store.carts[userId] || []);
};

// Remove product from cart
exports.removeFromCart = (req, res) => {
  const { userId, productId } = req.params;
  if (!store.carts[userId])
    return res.status(404).json({ error: 'Cart is empty!' });

  store.carts[userId] = store.carts[userId].filter(
    (item) => item.productId !== parseInt(productId)
  );
  res.json({ message: 'Product removed from cart!' });
};
