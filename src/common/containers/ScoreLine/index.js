import React, { Component } from 'react'

class ScoreLine extends Component {
  render() {
    const { viewBox } = this.props

    // console.log(this.props)

    return (

      <svg x={viewBox.x} y={viewBox.y + 37}>
        <line x1={0} y1={0} x2={50} y2={0} style={{ stroke: 'rgb(32, 174, 236)', strokeWidth: '7' }} />
      </svg>
    )
  }
}

export default ScoreLine
