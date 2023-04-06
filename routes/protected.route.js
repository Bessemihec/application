const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.get('/protected', authMiddleware, (req, res) => {
  const { userId } = req;
  res.json({ message: `Protected route accessed by user ${userId}` });
});

module.exports = router;