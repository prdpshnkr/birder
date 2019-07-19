import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Header from './components/Layouts/Header'
import Geolocation from './containers/HomePageSearch/Geolocation'
import ReverseGeoCode from './containers/HomePageSearch/ReverseGeoCode'

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Geolocation />
      <ReverseGeoCode />
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

