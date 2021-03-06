var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('index.html');
    var len = buffer.length;
    var string = buffer.toString('utf8', 0, len);
    response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
