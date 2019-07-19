import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUser } from '../../../actions/user'
import Geolocation from '../../HomePageSearch/Geolocation'

class HotspotsByLocation extends React.Component {
  componentDidMount() {
    axios.get('https://birder-app.herokuapp.com/users/account', {
      headers: {
        'x-auth': localStorage.getItem('userAuthToken')
      }
    })
      .then(response => {
        const user = response.data
        this.setState({ user })
        this.props.dispatch(setUser(user))
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Geolocation />
        <h2>User Account</h2>
        <p>{this.props.user.username}</p>
        <p>{this.props.location.coords.longitude}</p>
        <p>{this.props.address}</p>
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

export default connect(mapStateToProps)(HotspotsByLocation)