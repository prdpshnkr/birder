import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import _ from 'lodash'

import Authentication from './containers/Authentication/Authentication'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Authentication />
        <BrowserRouter>
          {/* <div>
            <Account />
            <Login />
            <Logout />
            <Profile />
            <Register />
          </div> */}
        </BrowserRouter>
      </Fragment >
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

