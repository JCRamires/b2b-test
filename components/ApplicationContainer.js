import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'

import Application from './Application.jsx'
import Catalogo from './Catalogo.jsx'
import About from './About.jsx'
import PageNotFound from './PageNotFound.jsx'

ReactDOM.render((
    <Router history={browserHistory} >
        <Route path='/' component={Application} >
            <IndexRoute component={Catalogo} />
            <Route path='about' component={About} />
        </Route>
        <Route path='*' component={PageNotFound} />
    </Router>
), document.getElementById('react-root'))
