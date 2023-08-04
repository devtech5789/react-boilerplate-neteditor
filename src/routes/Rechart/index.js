import React, { Component } from 'react'
import ChartComponents from '../../common/containers/ChartComponents'

import './rechart.scss'


class Rechart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 1, pv: 420, pt: 410 },
        { name: 2, pv: 430, pt: 411 },
        { name: 3, pv: 440, pt: 413 },
        { name: 4, pv: 460, pt: 415 },
        { name: 5, pv: 480, pt: 417 },
        { name: 6, pv: 500, pt: 418 },
        { name: 7, pv: 550, pt: 418 },
        { name: 8, pv: 420, pt: 419 },
        { name: 9, pv: 430, pt: 420 },
        { name: 10, pv: 440, pt: 422 },
        { name: 11, pv: 460, pt: 425 },
        { name: 12, pv: 480, pt: 428 },
        { name: 13, pv: 500, pt: 430 },
        { name: 14, pv: 550, pt: 432 },
        { name: 15, pv: 420, pt: 435 },
        { name: 16, pv: 430, pt: 437 },
        { name: 17, pv: 440, pt: 440 },
        { name: 18, pv: 460, pt: 442 },
        { name: 19, pv: 480, pt: 444 },
        { name: 20, pv: 500, pt: 446 },
        { name: 21, pv: 550, pt: 448 },
        { name: 22, pv: 420, pt: 454 },
        { name: 23, pv: 430, pt: 456 },
        { name: 24, pv: 440, pt: 458 },
        { name: 25, pv: 460, pt: 462 },
        { name: 26, pv: 480, pt: 466 },
        { name: 27, pv: 500, pt: 470 },
        { name: 28, pv: 550, pt: 475 },
        { name: 29, },
      ]
    }
  }

  render() {

    return (
      <div className='rechart-wrap'>
        <ChartComponents data={this.state.data} />
      </div>
    )
  }
}


export default Rechart