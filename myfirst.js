var http = require('http');
var dt_obj = require('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var c = ['(','{',')'];
  if(dt_obj.myDateTime(c)>0){
    res.write("false");
  }
  else{
    res.write('true');
  }
  res.write('<br>');
  res.write(req.url);
  res.write('<br>');
  if(q.year){
    res.write(q.year);
    console.log(q.year);
    res.write('<br>');
  }
  res.end('Hello World!');
}).listen(8080);