import React, { Component } from 'react'

class HotspotsSideBarList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div id="sidebar">
        <input placeholder="Filtered COntent" value={this.props.query} onChange={(e) => { this.props.filterVenues(e.target.value) }} />
        <br />
        <br />
        {
          this.props.filteredVenues && this.props.filteredVenues.length > 0 && this.props.filteredVenues.map((hotspot, index) => (
            <div key={index} className="venue-item" onClick={() => { this.props.listItemClick(hotspot) }} >
              {hotspot.locName}
            </div>
          ))
        }
      </div>
    )
  }
}

export default HotspotsSideBarList