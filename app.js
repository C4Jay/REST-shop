const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products')
const checkoutRoutes = require('./api/routes/checkouts');

app.use('/products', productRoutes);
app.use('/checkouts', checkoutRoutes);

module.exports = app;