import React, { Component } from 'react'
import { Link } from 'react-router'

export default class About extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <br />
                <Link to='catalogo'>Catalogo</Link>
                <br />
                Página About
            </div>
        )
    }
}
