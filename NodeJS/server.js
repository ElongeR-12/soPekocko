//import http native package of node
const http = require('http');
//create a server
const server = http.createServer((req, res) => {
    res.end('reponse server');
});

server.listen(process.env.PORT || 3000);