var express = require('express');
var app = express();
var path = require('path');


app.get('/*', function(req, res) {
    if(req.url =='/'){
      req.url = '/index.html';
    }

    res.sendFile(path.join(__dirname + req.url));
});

app.listen(80);
console.log('Server running at http://127.0.0.1:80/');
