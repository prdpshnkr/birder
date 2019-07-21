import React, { Component, Fragment } from 'react'
import Footer from './components/Layouts/Footer'
// import HotspotsByLocationUi from './containers/NearbyHotspots/HotspotsByLocationUi'
import HotspotsByLocation from './containers/NearbyHotspots/HotspotsByLocation'


class Hotspots extends Component {
  render() {
    return (
      <Fragment>
        {/* <HotspotsByLocationUi /> */}
        <HotspotsByLocation />
        <Footer />
      </Fragment>
    )
  }
}

export default Hotspots