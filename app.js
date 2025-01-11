const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/ProductRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

module.exports = app;
