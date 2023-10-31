const db = require('./db/db.js')

function query(callback) {
  db.any("SELECT * FROM bible_text WHERE bible_version = 'NA28'")
  .then((data) =>{callback(data)})
  .catch((error) => {console.log('ERROR: ' + error)})
}

function printlines(data) {
  data.forEach(line => {
    console.log(line.bible_text)
  })
}

query(printlines)

