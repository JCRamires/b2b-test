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

        var worker = new Worker('./ApplicationWorker.js')
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
        this.applicationWorker.postMessage('shu').then((response) => {
            this.setState({
                itensCatalogo: response.itensCatalogo,
                loading: false
            })
        }).catch((error) => {
            // handle error
        })
    }

    render() {
        return (
            <div>
                <Link to='about'>About</Link>
                {this.showContent()}
            </div>
        )
    }
}