(function () {
  var express = require('express');
  var app = express();
  var path = require('path');
  var favicon = require('serve-favicon');
  app.use(express.static('public'));
  app.use(favicon(path.join(__dirname + '/public/favicon.ico')));

  
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/site.html'));
  });

  app.get('/resume', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/resume.pdf'));
  });
  
  app.get('/facerecognition', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/facerecognition.html'));
  });
  
  var server = app.listen(8000);
})();
