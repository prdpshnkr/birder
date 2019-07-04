import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUser } from '../../actions/user'
// import { setPosts } from '../../actions/posts'

class Account extends React.Component {
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

    // axios.get('http://dct-user-auth.herokuapp.com/posts', {
    //   headers: {
    //     'x-auth': localStorage.getItem('userAuthToken')
    //   }
    // })
    //   .then(response => {
    //     const posts = response.data
    //     this.props.dispatch(setPosts(posts))
    //   })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>User Account</h2>
        <p>{this.props.user.username}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Account)