const express = require('express');
const router = express.Router();

router.post('/checkout', (req, res) => {
  const { userId } = req.body;
  try {
    const result = checkout(userId);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/discount', (req, res) => {
  const discountCode = generateDiscountCode();
  if (discountCode) {
    res.json({ message: 'Discount code generated!', code: discountCode });
  } else {
    res.json({ message: 'Not eligible for discount!' });
  }
});

module.exports = router;
