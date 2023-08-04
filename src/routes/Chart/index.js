import React, { Component } from 'react'
import DoughnutChart from '../../common/containers/DoughnutChart'


class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: '#42A5F5',
            borderColor: '#42A5F5'
          },
          {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            backgroundColor: '#66BB6A',
            borderColor: '#66BB6A'
          }
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <DoughnutChart data={this.state.chartData} />
      </div>
    )
  }
}


export default Chart