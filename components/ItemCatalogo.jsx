import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ItemCatalogo extends Component {
    render() {
        let link = 'catalogo/' + this.props.item.id
        return (
            <div>
                <Link to={link}>
                    Nome: {this.props.item.nome}
                </Link>
            </div>
        )
    }
}
