var http = require('http');

function serve(ip, port)
{
        http.createServer(function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("NodeJS running behind nginx "+ip+":"+port+"\n");
        }).listen(port, ip);
        console.log('Server running at http://'+ip+':'+port+'/');
}

serve('127.0.0.1', 9001);
serve('127.0.0.1', 9002);
