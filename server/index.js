const compression = require('compression');
const express = require('express');

const server = express();

server.use(express.static(`${__dirname}/../dist`));
server.use(compression());

let port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log(`running on port ${port}`);
});
