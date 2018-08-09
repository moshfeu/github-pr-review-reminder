const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/pr', (req, res) => {
  console.log('actual pr requested ----');
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));