var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/plain'});
    var cwd = process.cwd();
      dinos = readFile();
      res.end(dinos);
    });
}).listen(9000);


function readFile(){
  fs.readFile(cwd + '/dinosaurs.txt', function(err, data) {
    var dinos = data.toString();
    return dinos;
  });
};
