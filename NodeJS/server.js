//import http native package of node
const http = require('http');

const app = require('./app');
//set port to run express application
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);