import React, { Component } from 'react'
import axios from 'axios'
import './HotspotsByLocation.css'
import { load_google_maps, load_hotspots } from '../../utils'

class HotspotsByLocation extends Component {

  componentDidMount() {
    let googleMapsPromise = load_google_maps();
    let hotspotsPromise = load_hotspots()


    Promise.all([
      googleMapsPromise,
      hotspotsPromise
    ])
      .then(values => {
        console.log(values)
        let google = values[0];
        let hotspots = values[1]

        this.google = google;
        this.markers = [];
        this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          scrollwheel: true,
          center: { lat: hotspots[0].lat, lng: hotspots[0].lng }
        });

        hotspots.forEach(hotspot => {
          let marker = new google.maps.Marker({
            position: { lat: hotspot.lat, lng: hotspot.lng },
            map: this.map,
            hotspot: hotspot,
            id: hotspot.locID,
            name: hotspot.locName,
            animation: google.maps.Animation.DROP
          });

        })

      })
  }

  render() {
    return (
      <div id="map">

      </div>
    )
  }
}

export default HotspotsByLocation