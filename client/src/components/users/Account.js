import React from 'react'
import axios from 'axios'
// import { connect } from 'react-redux'
// import { setUser } from '../../actions/user'
// import { setPosts } from '../../actions/posts'

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    // axios.get('http://dct-user-auth.herokuapp.com/users/account', {
    //   headers: {
    //     'x-auth': localStorage.getItem('userAuthToken')
    //   }
    // })
    //   .then(response => {
    //     const user = response.data
    //     this.props.dispatch(setUser(user))
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

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
    return (
      <div>
        <h2>User Account</h2>
        {/* <p>{this.props.user.username}</p> */}
      </div>
    )
  }
}

// export default Account
export default Account