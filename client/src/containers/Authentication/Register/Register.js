import React, {Fragment, Component} from 'react'
import axios from 'axios'
import RegisterUi from './RegisterUi'
// import Header from '../../../components/Layouts/Header'
import Footer from '../../../components/Layouts/Footer'


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    e.persist()
    this.setState(() => ({
      [e.target.name]: e.target.value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios.post('https://birder-app.herokuapp.com/users/register', formData)
      .then(response => {
        if (response.data.errors) {
          alert(response.data.message)
        }
        else {
          this.props.history.push('/users/login')
        }
      })
  }

  render() {
    return (
      <Fragment>
      {/* <Header /> */}
      <RegisterUi submit={this.handleSubmit} enter={this.handleChange} />
      <Footer />
      </Fragment>
      // <div>
      //   <h2>Register</h2>
      //   <form onSubmit={this.handleSubmit}>
      //     <label>
      //       username
      //       <input type="text" value={this.state.username} name="username" onChange={this.handleChange}></input>
      //     </label><br />
      //     <label>
      //       email
      //       <input type="text" value={this.state.email} name="email" onChange={this.handleChange}></input>
      //     </label><br />
      //     <label>
      //       password
      //       <input type="password" value={this.state.password} name="password" onChange={this.handleChange}></input>
      //     </label><br />
      //     <input type="submit"></input>
      //   </form>
      // </div>
    )
  }
}

export default Register