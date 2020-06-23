const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const saucesRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;