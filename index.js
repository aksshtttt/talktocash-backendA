const express = require('express');
const router = express.Router();

const VERIFY_TOKEN = 'talktocash123';

router.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('✅ Webhook verified');
    res.status(200).send(challenge);
  } else {
    console.log('❌ Verification failed');
    res.sendStatus(403);
  }
});

router.post('/webhook', (req, res) => {
  console.log('🔔 Received:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

module.exports = router;
