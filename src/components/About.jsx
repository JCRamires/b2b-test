import React, { Component } from 'react'
import { Link } from 'react-router'

import { connect } from 'react-redux'
import { changeCurrentPage } from '../redux/actions/actions'

class About extends Component {
    componentDidMount() {
        this.props.changeCurrentPage('About')
    }

    render() {
        return (
            <div>
                Página About
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

export const AboutContainer = connect(undefined, mapDispatchToProps)(About)
