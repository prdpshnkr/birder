import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';


const style = {
  width: '66.66%',
  height: '93vh',
  display: 'flex',
  flexWrap: 'wrap'
}
class MapContainer extends Component {

  render() {
    return (

      <Map google={this.props.google}
        zoom={18}
        style={style}
        initialCenter={{
          lat: this.props.location.coords.latitude,
          lng: this.props.location.coords.longitude
        }}
      >
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
      </Map>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    address: state.address
  }
}

const API_KEY = process.env.REACT_APP_API_KEY;

const newCurrentLocation = GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)

export default connect(mapStateToProps)(newCurrentLocation)

