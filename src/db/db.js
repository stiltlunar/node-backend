const pgp = require('pg-promise')();
require('dotenv').config();

const cn = {
  host: process.env.PG_HOST || 'localhost',
  port: process.env.PG_PORT || 5432,
  database: process.env.PG_DB || 'MyDB',
  user: process.env.PG_USER || 'postgres',
  password: process.env.PG_PASS || '',
  max: process.env.PG_CONN || 30
};

const db = pgp(cn);

module.exports = db;