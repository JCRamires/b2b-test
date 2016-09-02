import React, {Component} from 'react'
import PromiseWorker from 'promise-worker'

import Loading from './Loading.jsx'

export default class DetalheItemCatalogo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            itensCatalogo: []
        }

        let worker = require('worker!../workers/catalogoWorker')
        this.applicationWorker = new PromiseWorker(new worker())
    }

    componentDidMount() {
        this.fetchDetails()
    }

    fetchDetails() {
        this.applicationWorker.postMessage({
            command: 'getDetalhesItemCatalogo',
            id: this.props.params.id
        }).then((response) => {
            this.setState({
                detalhesItem: response,
                loading: false
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    showContent() {
        if (this.state.loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <div>
                    id: {this.state.detalhesItem.id}
                    <br />
                    Nome: {this.state.detalhesItem.nome}
                    <br />
                    Sobrenome: {this.state.detalhesItem.sobrenome}
                    <br />
                    <img src={this.state.detalhesItem.foto}/>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.showContent()}
            </div>
        )
    }
}
