const express = require('express');
const {
  checkout,
  generateDiscount,
} = require('../controllers/orderController');
const router = express.Router();

router.post('/checkout', checkout);
router.get('/discount', generateDiscount);

module.exports = router;
