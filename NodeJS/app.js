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
const helmet = require("helmet");
app.use(session({
    secret: process.env.SECRET,// used to sign the session ID cookie
    name: process.env.SESSION_NAME,//change session cookie name
    cookie: {
        httpOnly: true,// prevent client side Javascript to see the cookie
        secure: true, /*when using https*/
        maxAge: 60 * 60 * 1000,
        domain:'http://localhost:3000' 
    }
}));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', saucesRoutes);
app.use('/api/auth', userRoutes);
module.exports = app;