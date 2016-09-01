import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Application extends Component{

    render() {
        return (
            <div>
                <Link to='/'>Home</Link>
                <br />
                <Link to='catalogo'>Catalogo</Link>
                <br />
                <Link to='about'>About</Link>
                <br />
                <br />
                {this.props.children}
            </div>
        )
    }
}
