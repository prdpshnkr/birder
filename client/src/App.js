import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import _ from 'lodash'

// import Authentication from './containers/Authentication/Authentication'
// import HomePageSearch from './containers/HomePageSearch/HomePageSearch'
// import Footer from './components/Layouts/Footer'
import Header from './components/Layouts/Header'
// import Home from './Home';
// import Header from './components/Layouts/Header';

// import Register from './containers/Authentication/Register/Register'
// import Login from './containers/Authentication/Login/Login'
// import Account from './containers/Authentication/Account/Account'
// import Logout from './components/users/Logout'
// import Profile from './components/users/Profile'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />

      </Fragment>
      // <BrowserRouter>
      //   <Switch>
      //     <Route path="/users/register" component={Register} />
      //     <Route path="/users/login" component={Login} />
      //     <Route path="/users/account" component={Account} />
      //     <Route path="/users/logout" component={Logout} />
      //     <Route path="/users/profile" component={Profile} />
      //   </Switch>
      // </BrowserRouter >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    isAuthenticated: true
  }
}

export default connect(mapStateToProps)(App)

