import React, { Component } from 'react'
import { Link } from 'react-router'

import { connect } from 'react-redux'

class Application extends Component {
    render() {
        return (
            <div>
                <div>
                    Página atual: {this.props.paginasReducer} (este dado vem da store do Redux)
                </div>
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
            </div>
        )
    }
}

const mapStateToProps = state => state

export const ApplicationContainer = connect(mapStateToProps)(Application)
