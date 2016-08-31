const registerPromiseWorker = require('promise-worker/register')
const axios = require('axios')

registerPromiseWorker(function(message) {
    console.log(message)
    return axios.get('http://localhost:3001/itensCatalogo').then(response => response.data)
})
