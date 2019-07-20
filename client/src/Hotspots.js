import React, { Component, Fragment } from 'react'
import Footer from './components/Layouts/Footer'
import HotspotsByLocationUi from './containers/NearbyHotspots/HotspotsByLocationUi'

class Hotspots extends Component {
  render() {
    return (
      <Fragment>
        <HotspotsByLocationUi />
        <Footer />
      </Fragment>
    )
  }
}

export default Hotspots