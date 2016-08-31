var express = require('express');
const path = require('path')
var app = express();

app.use(express.static(__dirname + '/dist'))

app.get('/itensCatalogo/', function (request, response){
  var data = { itensCatalogo: [] }
  for (var i = 0; i < 1000; i++) {
    data.itensCatalogo.push({ id: i+1, nome: 'item ' + (i+1) })
  }
  response.send(data);
})

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
