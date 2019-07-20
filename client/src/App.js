import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Header from './components/Layouts/Header'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
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

