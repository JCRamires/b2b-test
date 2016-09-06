import React, { Component } from 'react'
import { Link } from 'react-router'

import { connect } from 'react-redux'

import { changeCurrentPage } from '../redux/actions/actions'

class Home extends Component {
    componentDidMount() {
        this.props.changeCurrentPage('Home')
    }

    render() {
        return(
            <div>
                <h1>HOME PAGE SHUUU</h1>
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

export const HomeContainer = connect(undefined, mapDispatchToProps)(Home)
