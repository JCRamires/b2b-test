import registerPromiseWorker from 'promise-worker/register'
import axios from 'axios'

registerPromiseWorker((message) => {
    console.log(message)
    switch(message.command){
        case 'getItensCatalogo':
            return getItensCatalogo()
        case 'getDetalhesItemCatalogo':
            return getDetalhesItemCatalogo(message.id)
    }
})

function getItensCatalogo(){
    return axios.get('http://localhost:3001/itensCatalogo').then(response => response.data)
}

function getDetalhesItemCatalogo(id){
    return axios.get('http://localhost:3001/itensCatalogo/'+id).then(response => response.data)
}