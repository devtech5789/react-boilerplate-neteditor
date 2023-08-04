import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'


class DoughnutChart extends Component {

  render() {
    const { data } = this.props

    return (
      <div>
        <Line
          data={data}
          options={
            {
              scales: {
                yAxes: [{
                  stacked: true
                }]
              }
            }
          }
        />
      </div>
    )
  }
}

export default DoughnutChart
