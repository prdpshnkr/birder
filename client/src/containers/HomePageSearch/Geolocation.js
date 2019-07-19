import React, { Component } from 'react'
import { connect } from 'react-redux'

import { GET_LOCATION } from '../../actions/locationAction'

class Location extends Component {

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            coords: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          }
          this.setState({ location });
          this.props.dispatch(GET_LOCATION(location))
        },
        (error) => this.setState(
          { error: error.message }
        )
      );
    }
  }

  render() {

    return (
      <div>
        {/* <div>Latitude: <span>{latitude}</span></div>
        <div>Longitude: <span>{longitude}</span></div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { location: state.location };
};

export default connect(mapStateToProps)(Location);



