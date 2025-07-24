const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('✅ TalkToCash backend is live and working!');
});

module.exports = router;
