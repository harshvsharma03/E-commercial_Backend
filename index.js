// run `node index.js` in the terminal

const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(bodyParser.json()); // For parsing JSON requests

// Routes
app.use('/cart', cartRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
