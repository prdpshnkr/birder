import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
// import Header from './components/Layouts/Header'
import Footer from './components/Layouts/Footer'
import HomePageSearchUi from './containers/HomePageSearch/HomePageSearchUi'

class Home extends Component {
  componentDidMount() {
    axios.get('localhost:3000/home')
  }

  render() {
    return (
      <Fragment>

        <HomePageSearchUi />
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