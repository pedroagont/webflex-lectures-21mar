require('dotenv').config();
const { db } = require('./index');

const usersSchema = require('./schemas/usersSchema');
const fruitsSchema = require('./schemas/fruitsSchema');

const usersSeeds = require('./seeds/usersSeeds');
const fruitsSeeds = require('./seeds/fruitsSeeds');

db.connect();

const promises = [
  db.query(usersSchema),
  db.query(fruitsSchema),
  db.query(usersSeeds),
  db.query(fruitsSeeds)
];

Promise.all(promises)
  .then(() => console.log('DB reset completed!'))
  .then(() => db.end())
  .catch(err => console.log('Failed to reset', err));
