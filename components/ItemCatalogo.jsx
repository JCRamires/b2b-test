import React, { Component } from 'react'

export default class ItemCatalogo extends Component {
    render() {
        return (
            <div>
                Nome: {this.props.item.nome}
            </div>
        )
    }
}
