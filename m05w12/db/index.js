// Database setup
const { Client } = require('pg');

const dbConfig = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
};

const db = new Client(dbConfig);

module.exports = { db };
