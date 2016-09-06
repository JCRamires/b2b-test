import registerPromiseWorker from 'promise-worker/register'
import axios from 'axios'

registerPromiseWorker((message) => {
    switch(message.command){
        case 'getItensCatalogo':
            return getItensCatalogo()
        case 'getDetalhesItemCatalogo':
            return getDetalhesItemCatalogo(message.id)
    }
})

function getItensCatalogo(){
    return axios.get('http://localhost:3000/itensCatalogo')
        .then(response => response.data)
        .catch(error => {
            throw new Error(error)
        })
}

function getDetalhesItemCatalogo(id){
    return axios.get('http://localhost:3000/itensCatalogo/'+id)
        .then(response => response.data)
        .catch(error => {
            throw new Error(error)
        })
}
