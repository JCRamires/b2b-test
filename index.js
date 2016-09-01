var express = require('express');
const path = require('path')
const _ = require('lodash')
var app = express();

const jsonData = require('./jsonData.json')

app.use(express.static(__dirname + '/dist'))

app.get('/itensCatalogo/', function (request, response) {
    response.send(jsonData)
})

app.get('/itensCatalogo/:id/', function (request, response) {
    var index = _.findKey(jsonData.itensCatalogo, function(o){
        return o.id == parseInt(request.params.id)
    })

    response.send(jsonData.itensCatalogo[index])
})

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});
