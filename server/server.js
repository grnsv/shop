const express = require('express');
const fs = require('fs');
const path = require('path');
const cartRouter = require('./cartRouter');
const recommendRouter = require('./recommendations');
const homeProductsRouter = require('./homeProducts');

const app = express();

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/api/cart', cartRouter);
app.use('/api/recommendations', recommendRouter);
app.use('/api/homeProducts', homeProductsRouter);

const catalogJSONPath = path.resolve(__dirname, './db/products.json');

app.get('/api/products', (req, res) => {
  fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
    if (err) {
      res.send(JSON.stringify({ result: 0, text: err }));
      // res.sendStatus(404, JSON.stringify({result: 0, text: err}));
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
      res.send(data);
    }
  });
});

const port = process.env.PORT || 5555;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
