import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash'

import Register from './components/users/Register'
import Login from './components/users/Login'
import Account from './components/users/Account'
import Logout from './components/users/Logout'
import Profile from './components/users/Profile'
// import ShowPost from './components/users/ShowPost'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h2>{this.props.msg}</h2>
          <ul>
            {_.isEmpty(this.props.user) ? (
              <div>
                <li><Link to="/users/register">Register</Link></li>
                <li><Link to="/users/login">Login</Link></li>
              </div>
            ) : (
                <div>
                  <li><Link to="/users/account">Account</Link></li>
                  <li><Link to="/users/profile">Profile</Link></li>
                  <li><Link to="/users/logout">Logout</Link></li>
                </div>
              )}
          </ul>
          <Switch>
            <>
              <Route path="/users/register" component={Register} />
              <Route path="/users/login" component={Login} />
              <Route path="/users/account" component={Account} />
              <Route path="/users/logout" component={Logout} />
              <Route path="/users/profile" component={Profile} />
            </>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isAuthenticated: true,
    msg: "Birder"
  }
}
export default connect(mapStateToProps)(App)

