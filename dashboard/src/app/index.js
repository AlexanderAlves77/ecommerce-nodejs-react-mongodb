import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { HashRouter as Router, Route } from 'react-router-dom'

import base from './containers/HOC/Base'

// CONTAINER COM BASE
import Pedidos from './containers/Pedidos'

// CONTAINER SEM BASE
import Login from './containers/Login'
import RecuperarSenha from './containers/RecuperarSenha'
import ResetarSenha from './containers/RecuperarSenha/ResetarSenha'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path={'/'} exact component={base(Pedidos)} />

            <Route path={'/login'} component={Login} />
            <Route path={'/recuperar-senha'} component={RecuperarSenha} />
            <Route path={'/resetar-senha/:token'} component={ResetarSenha} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
