import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import PostForm from '../../../../../notes-app/client/src/components/users/PostForm'
// import { removePost } from '../../../../../notes-app/client/src/actions/posts'
// import axios from 'axios'

const Profile = (props) => {
  // const handleRemove = (id) => {
  //   const confirm = window.confirm("Are You Sure?")
  //   if (confirm) {
  //     // props.dispatch(removePost(id))
  //     axios.delete(`http://dct-user-auth.herokuapp.com/posts/${id}`, {
  //       headers: {
  //         'x-auth': localStorage.getItem('userAuthToken')
  //       }
  //     })
  //       .then(response => {
  //         props.dispatch(removePost(response.data._id))
  //         // if (serverRejected) // props.disptch(addPost())
  //       })
  //   }
  // }
  return (
    <div>
      <h3>Profile Component</h3>
      <p>{props.user.username}</p>
      {/* <h3>Total Posts - {props.posts.length}</h3>
      <ul>
        {props.posts.map(post => {
          return <li key={post._id}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>

            <button onClick={() => {
              handleRemove(post._id)
            }}>Remove</button>
          </li>
        })}
      </ul>
      <h3>Add Post</h3>
      <PostForm /> */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
    // posts: state.posts
  }
}

// export default Profile
export default connect(mapStateToProps)(Profile)
