const express = require('express');
const {
  addToCart,
  viewCart,
  removeFromCart,
} = require('../controllers/cartController');
const router = express.Router();

router.post('/add', addToCart);
router.get('/:userId', viewCart);
router.delete('/:userId/:productId', removeFromCart);

module.exports = router;
