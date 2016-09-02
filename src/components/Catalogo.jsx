import React, {Component} from 'react'
import PromiseWorker from 'promise-worker'

import { Link } from 'react-router'

import Loading from './Loading.jsx'
import ItemCatalogo from './ItemCatalogo.jsx'

export default class Catalogo extends Component{
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            itensCatalogo: []
        }

        var worker = new Worker('/dist/catalogoWorker.js')
        this.applicationWorker = new PromiseWorker(worker)
    }

    componentDidMount(){
        this.fetchContent()
    }

    showContent(){
        if(this.state.loading) {
            return (
                <Loading />
            )
        } else {
            return this.state.itensCatalogo.map((item) => {
                return (
                    <ItemCatalogo key={item.id} item={item} />
                )
            })
        }
    }

    fetchContent(){
        this.applicationWorker.postMessage({command: 'getItensCatalogo'})
            .then((response) => {
                this.setState({
                    itensCatalogo: response,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }

    render() {
        return (
            <div>
                {this.showContent()}
            </div>
        )
    }
}
