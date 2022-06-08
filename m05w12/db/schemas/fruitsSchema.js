module.exports = `
DROP TABLE IF EXISTS fruits CASCADE;

CREATE TABLE fruits (
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    userId INTEGER REFERENCES users(id) NOT NULL,
    name varchar(255) NOT NULL,
    color varchar(255) NOT NULL,
    emoji varchar(255) NOT NULL
);`;
