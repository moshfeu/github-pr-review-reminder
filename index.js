const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/pr', (req, res) => {
  console.log('actual pr requested ----');
  console.log(req.body);
  res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));