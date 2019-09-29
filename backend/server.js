
'use strict';

// Dependencies
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');
const StoredThrowback = require('./models/throwbacks');

// Constants
const PORT = process.env.PORT || 8081;

// Express Setup.
const app = express();
const server = http.createServer(app);

// Configure API security.
app.use(cors({
  credentials: true,
  origin: true,
}));

// For parsing json data.
app.use(bodyParser.json());

// Now uses route specified in api.js.
app.post('/start-throwback', (req, res) => {
    StoredThrowback.create(req.body).then((url) => {
      res.send(url);
    }).catch(() => {
      res.status(500).send('Error: throwback required for storing');
    });
  });
  
// Error handling middleware.
app.use(function(err, req, res, next) {
  console.error(err);
  res.status(422).send({error: err.message});
});

// Start up the server!
server.listen(PORT, () => {
  console.log(`Server started on port`, PORT);
});