import React, { Component } from 'react'
import PromiseWorker from 'promise-worker'
import Loading from './Loading.jsx'
import ItemCatalogo from './ItemCatalogo.jsx'

export default class Application extends Component{
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            itensCatalogo: []
        }

        var worker = new Worker('./components/dist/ApplicationWorker.js')
        this.applicationWorker = new PromiseWorker(worker)
    }

    componentDidMount(){
        this.fetchContent()
    }

    showContent(){
        if(this.state.loading) {
            return (
                <div>Loading data</div>
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
                itensCatalogo: response,
                loading: false
            })
        }).catch((error) => {
            // handle error
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
