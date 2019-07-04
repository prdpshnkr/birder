import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { resetUser } from '../../actions/user';

class Logout extends React.Component {

  componentDidMount() {
    axios.delete('https://birder-app.herokuapp.com/users/logout', {
      headers: {
        'x-auth': localStorage.getItem('userAuthToken')
      }
    })
      .then(response => {
        localStorage.removeItem('userAuthToken')
        this.props.dispatch(resetUser())
        this.props.history.push('/users/login')
      })
  }

  render() {
    return (
      <div>
        <p>Logging Out... </p>
      </div>
    )
  }
}

export default connect()(Logout)