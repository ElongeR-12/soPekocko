//import express
const express = require('express');
//express() method to create express app
const app = express();
const database = require('./database');
// const Sauce = require('./models/sauce');
const User = require('./models/user');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
// const saucesRoutes = require('./models/sauce');
const userRoutes = require('./routes/user');

// app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;