var http = require('http');
http.createServer(function(req, res) {
  console.log("Request from Nginx on 9001")
  res.writeHead(200);
  res.end("Node behind Nginx on 9001");
}).listen(9001, "127.0.0.1");

http.createServer(function(req, res) {
  console.log("Request from Nginx on 9002")
  res.writeHead(200);
  res.end("Node behind Nginx on 9002");
}).listen(9002, "127.0.0.1");
