// ----------------------- REQUIREMENTS
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieSession = require('cookie-session');

const { db } = require('./db');
const routes = require('./routes');

// ----------------------- SETUP AND MIDDLEWARES
db.connect();
const app = express();

app.use(helmet()); // includes security headers (owasp)
app.use(morgan('dev')); // middleware that logs all the requests
app.use(express.json()); // allow requests to include json body
app.use(
  cookieSession({
    name: 'session',
    keys: ['myRandomSuperSecretKey', 'anotherRandomString'],

    // Cookie Options
    // maxAge: 24 * 60 * 60 * 1000 // 24 hours
    maxAge: 10 * 60 * 1000 // 10 min
  })
);

// ----------------------- ROUTES / ENDPOINTS
app.use('/', routes);

module.exports = app;
