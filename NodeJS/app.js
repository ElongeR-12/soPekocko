const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const path = require('path');
const saucesRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const dotenv = require('dotenv').config();
const app = express();
const cors = require('cors');
const session = require('express-session');
app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    rolling: true,
    resave: false,
    cookie: {
        httpOnly: true,
        // secure: true,when using https
        maxAge: 60 * 60
    }
}));
app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);
module.exports = app;