import React, {Component} from 'react'
import PromiseWorker from 'promise-worker'

import { Link } from 'react-router'

import { connect } from 'react-redux'
import { changeCurrentPage } from '../redux/actions/actions'

import Loading from './Loading.jsx'
import ItemCatalogo from './ItemCatalogo.jsx'

class Catalogo extends Component{
    constructor(props){
        super(props)

        this.state = {
            loading: true,
            itensCatalogo: []
        }

        let worker = require('worker!../workers/catalogoWorker')
        this.applicationWorker = new PromiseWorker(new worker())
    }

    componentDidMount(){
        this.props.changeCurrentPage('Catalogo')
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

const mapDispatchToProps = dispatch => {
    return {
        changeCurrentPage: currentPage => {
            dispatch(changeCurrentPage(currentPage))
        }
    }
}

export const CatalogoContainer = connect(undefined, mapDispatchToProps)(Catalogo)
