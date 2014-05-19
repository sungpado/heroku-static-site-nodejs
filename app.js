var http = require('http'),
    connect = require('connect');

var app = connect()
  .use(connect.static('public'))
  .use(function(req, res){
    res.end('hello world\n');
  })

console.log("Server listening on http://0.0.0.0:3000");

http.createServer(app).listen(3000);
