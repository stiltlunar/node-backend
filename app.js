const pgp = require('pg-promise')();

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'bibledb',
  user: 'codymeuer',
  password: '',
  max: 30 // use up to 30 connections

  // "types" - in case you want to set custom type parsers on the pool level
};

const db = pgp(cn);

async function query() {
  const data = await db.any('SELECT * FROM bible_versions')
  console.log(data)
}

query()
