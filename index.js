const http = require('http');

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const login = require('./lib/login');

app.use('login/', login);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('ejemplo app listener en port 3000');
});

const server = http.createServer((request, response) => {
// eslint-disable-next-line no-console
  console.log(request.url);
  response.end('estamo get');
});

server.listen(port, (err) => {
  if (err) {
    console.log('Something bad happened', err); // eslint-disable-line no-console
    return;
  }
  console.log(`Server is listening on ${port}`); // eslint-disable-line no-console
});
