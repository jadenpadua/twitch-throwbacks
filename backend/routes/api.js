// Dependencies
const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();
const StoredThrowback = require('../models/throwbacks');

router.post('/start-throwback', (req, res) => {
  StoredThrowback.create(req.body).then((url) => {
    res.send(url);
  }).catch(() => {
    res.status(500).send('Error: throwback required for storing');
  });
});