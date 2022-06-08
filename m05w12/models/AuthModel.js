const { db } = require('../db');

const register = (email, password) => {
  return db
    .query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [
      email,
      password
    ])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const login = email => {
  return db
    .query('SELECT * FROM users WHERE email = $1', [email])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

module.exports = { register, login };
