import React from 'react'
import NotesForm from './Form'
import axios from 'axios'

class NotesEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      note: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`http://localhost:3005/notes/${id}`)
      .then(response => {
        this.setState(() => ({
          note: response.data
        }))
      })
  }

  handleSubmit(formData) {
    axios.put(`http://localhost:3005/notes/${this.state.note._id}`, formData)
      .then(response => {
        if (response.data.hasOwnProperty('errors')) {
          console.log(response.data.errors)
        } else {
          this.props.history.push(`/notes/${response.data._id}`)
        }
      })
  }

  render() {
    console.log('edit render', this.state.note)
    return (
      <div>
        <h2>Edit Note</h2>
        <NotesForm handleSubmit={this.handleSubmit} note={this.state.note} />
      </div>
    )
  }

}

export default NotesEdit

