import registerPromiseWorker from 'promise-worker/register'
import axios from 'axios'

registerPromiseWorker(function(message) {
    console.log(message)
    return axios.get('http://localhost:3001/itensCatalogo').then(response => response.data)
})
