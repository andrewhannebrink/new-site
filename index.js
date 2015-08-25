(function () {
  var express = require('express');
  var app = express();
  var path = require('path');
  app.use(express.static('public'));
  
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/site.html'));
  });
  
  var server = app.listen(8000);
})();
