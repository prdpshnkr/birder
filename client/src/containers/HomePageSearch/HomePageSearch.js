import React, { Component } from 'react'
import HomePageSearchUi from './HomePageSearchUi'

class HomePageSearch extends Component {
  state = {
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render() {
    return (
      <HomePageSearchUi />
    )
  }
}

export default HomePageSearch


