import React, { Component } from 'react'
import RechartBar from '../../common/containers/RechartBar'


class BarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Week1', pv: 10, pt: 47 },
        { name: 'Week2', pv: 30, pt: 78 },
        { name: 'Week3', pv: 60, pt: 82 },
        { name: 'Week4', pv: 90, pt: 54 },
      ]
    }
  }

  render() {
    const { data } = this.state
    return (
      <div className='barchart-wrap'>
        <RechartBar data={data} />
      </div>
    )
  }
}


export default BarContainer
