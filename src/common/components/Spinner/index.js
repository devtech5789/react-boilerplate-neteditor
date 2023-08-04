import React, { Component } from 'react'
import spinner from '../../../assets/img/spinner.gif'

import './spinner.scss'


class Spinner extends Component {
  render() {

    return (
      <div className='spinner'>
        <img
          src={spinner}
          alt="Loading..."
        />
      </div>
    )
  }
}

export default Spinner
