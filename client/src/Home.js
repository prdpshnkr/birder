import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
// import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'
import HomePageSearch from './containers/HomePageSearch/HomePageSearch'

class Home extends Component {
  componentDidMount() {
    axios.get('localhost:3000/home')
  }

  render() {
    return (
      <Fragment>

        <HomePageSearch />
        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)