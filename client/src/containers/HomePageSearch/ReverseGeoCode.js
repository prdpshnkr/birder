import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { reverseGeo } from '../../actions/reverseGeoAction'
import DisplayCurrentLocationDetails from './DisplayCurentLocationDetails'

class ReverseGeoCode extends Component {
  componentDidMount() {
    const API_KEY = process.env.REACT_APP_API_KEY
    console.log('lat', this.props.location.coords.latitude)
    console.log('lng', this.props.location.coords.longitude)

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.props.location.coords.latitude},${this.props.location.coords.longitude}&key=${API_KEY}`)
      .then(response => {
        // const address = response.data.results[0].formatted_address
        const address = {
          locData: {
            fullAdress: response.data.results[0].formatted_address,
            city: response.data.results[0].address_components[0].long_name
          }
        }
        this.setState({ address })
        this.props.dispatch(reverseGeo(address))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {/* <DisplayCurrentLocationDetails city={this.props.address.locData.city}/> */}
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

export default connect(mapStateToProps)(ReverseGeoCode)