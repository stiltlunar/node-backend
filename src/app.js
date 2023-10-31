const db = require('./db/db.js')

async function query() {
  const data = await db.any('SELECT * FROM bible_versions').catch((error) => {console.log('ERROR: ' + error)})
  console.log(data)
}

query()
