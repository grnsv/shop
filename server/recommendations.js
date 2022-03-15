const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const cartJSONPath = path.resolve(__dirname, './db/recommendations.json');

router.get('/', (req, res) => {
  fs.readFile(cartJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }));
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
