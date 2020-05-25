const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const products = require('./routes/api/products');
const orders = require('./routes/api/orders');

const app = express();

app.use(bodyParser.json());
// app.use(cors());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/api/products', products);
app.use('/api/orders', orders);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}.`));