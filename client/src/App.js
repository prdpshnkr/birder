import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'
// import _ from 'lodash'

import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'
// import Logout from './components/users/Logout'
// import Profile from './components/users/Profile'
// import ShowPost from './components/users/ShowPost'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ul>
            <li><Link to="/users/register">Register</Link></li>
            <li><Link to="/users/login">Login</Link></li>
          </ul>

          <Switch>
            <>
              <Route path="/users/register" component={Register} />
              <Route path="/users/login" component={Login} />
              <Route path="/users/account" component={Account} />
            </>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

