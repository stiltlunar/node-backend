const pgp = require('pg-promise')();
require('dotenv').config();

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DB,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  max: 30 // use up to 30 connections

  // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(cn);

async function query() {
  const data = await db.any('SELECT * FROM bible_versions').catch((error) => {console.log('ERROR: ' + error)})
  console.log(data)
}

query()
