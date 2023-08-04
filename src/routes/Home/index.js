import React, { Component } from 'react'
import Card from './containers/Card'

import './index.scss'


class Home extends Component {
  render() {
    return (
      <div className='card-container text-center'>
        <Card />
      </div>
    )
  }
}


export default Home