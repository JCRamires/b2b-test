// json-server jsonServer.js --port 3004

module.exports = function() {
  var data = { itensCatalogo: [] }
  for (var i = 0; i < 10000; i++) {
    data.itensCatalogo.push({ id: i+1, nome: 'item ' + (i+1) })
  }
  return data
}
