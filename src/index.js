import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { ApplicationContainer } from './components/Application.jsx'
import { HomeContainer } from './components/Home.jsx'
import { CatalogoContainer } from './components/Catalogo.jsx'
import DetalheItemCatalogo from './components/DetalheItemCatalogo.jsx'
import { AboutContainer } from './components/About.jsx'
import PageNotFound from './components/PageNotFound.jsx'

import reducers from './redux/reducers/reducers'

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path='/' component={ApplicationContainer} >
                <IndexRoute component={HomeContainer} />
                <Route path='catalogo'>
                    <IndexRoute component={CatalogoContainer} />
                    <Route path=':id' component={DetalheItemCatalogo} />
                </Route>
                <Route path='about' component={AboutContainer} />
            </Route>
            <Route path='*' component={PageNotFound} />
        </Router>
    </Provider>
), document.getElementById('react-root'))
