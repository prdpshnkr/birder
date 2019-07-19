import React, { Component, Fragment } from 'react'
import axios from axios

console.log(process.env.REACT_APP_API_KEY)

class Test extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      users: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    // const API_KEY = process.env.REACT_APP_API_KEY;

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState(() => ({
          users, isLoaded: true
        }))
      })
  }

  handleRefresh = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState(() => ({
          users, isLoaded: true
        }))
      })
  }

  render() {
    return (
      <div>
        {
          this.state.isLoaded ? <p> data fetched </p> : <p> Loading... </p>
        }
        <h2>Listing Users - {this.state.users.length} </h2>
        <ul>
          {
            this.state.users.map(user => {
              return <li key={user.id}> {user.name}</li>
            })
          }
        </ul>

        <button onClick={this.handleRefresh}> Refresh Data </button>
      </div>
    )
  }
}

export default Test
