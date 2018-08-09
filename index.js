const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log('---pr created!!---');
});

server.listen(port, () => {
  console.log(`Server running at :${port}`);
});