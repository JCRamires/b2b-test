const registerPromiseWorker = require('promise-worker/register')
const axios = require('axios')

registerPromiseWorker(function(message) {
    return axios.get('http://localhost:3004/itensCatalogo').then((response) => {
        let retorno = []
        response.data.map((item) => {
            retorno.push(item)
        })
        return retorno
    })
})
