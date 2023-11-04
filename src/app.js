const Express = require('express');
const app = new Express();
const path = require('path');

const db = require('./db/db.js');

async function getBibleText() {
  return db.any("SELECT * FROM bible_text WHERE bible_version = 'NA28'");
}

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
})

app.get('/bible_text_3john', async (req, res) => {
  console.log('request received')
  const bibleStuff = await getBibleText();
  res.json({text: bibleStuff});
})

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
})