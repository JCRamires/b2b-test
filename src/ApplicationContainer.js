import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory } from 'react-router'

import Application from './components/Application.jsx'
import Home from './components/Home.jsx'
import Catalogo from './components/Catalogo.jsx'
import DetalheItemCatalogo from './components/DetalheItemCatalogo.jsx'
import About from './components/About.jsx'
import PageNotFound from './components/PageNotFound.jsx'

ReactDOM.render((
    <Router history={browserHistory} >
        <Route path='/' component={Application} >
            <IndexRoute component={Home} />
            <Route path='catalogo'>
                <IndexRoute component={Catalogo} />
                <Route path=':id' component={DetalheItemCatalogo} />
            </Route>
            <Route path='about' component={About} />
        </Route>
        <Route path='*' component={PageNotFound} />
    </Router>
), document.getElementById('react-root'))
