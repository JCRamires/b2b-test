const registerPromiseWorker = require('promise-worker/register')

registerPromiseWorker(function(message) {
    let retorno = [
        {id: 1, nome: 'Um simples OK'},
        {id: 2, nome: 'Um simples status 200'}
    ]

    return retorno
})
