import React from 'react'
import { Header, Footer } from './Layouts';
import Exercises from './Exercises'


export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    )
  }
}