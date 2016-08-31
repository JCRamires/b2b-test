// json-server jsonServer.js --port 3004

module.exports = function() {
  var data = { itensCatalogo: [] }
  for (var i = 0; i < 100000; i++) {
    data.itensCatalogo.push({ id: i, nome: 'item' + i })
  }
  return data
}
