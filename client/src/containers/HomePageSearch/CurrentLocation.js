import React, { Component } from 'react'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const theme = {
  spacing: 8,
}

class CurrentLocation extends Component {

  render() {
    return (
      <div>
        <Paper mx="auto">
          <Typography variant="h5" component="h3">
            Your current location is {this.props.address.locData.city}
          </Typography>
          <Typography component="p">
            Lattitude is {this.props.location.coords.latitude}
          </Typography>
          <Typography component="p">
            Longitude is {this.props.location.coords.longitude}
          </Typography>
          <Typography component="p">
            Address is {this.props.address.locData.fullAdress}
          </Typography>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    address: state.address
  }
}

export default connect(mapStateToProps)(CurrentLocation)





