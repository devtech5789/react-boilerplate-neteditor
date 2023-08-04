import React, { Component } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  //  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  // CartesianAxis,
  Tooltip,
  Label,
  // Text,
} from 'recharts'
import Smile1 from '../Smile1'


class RechartBar extends Component {

  render() {
    const { data } = this.props

    return (
      <ResponsiveContainer width={'100%'} height={360}>
        <BarChart margin={{ top: 20, right: 20, bottom: 30, left: 20 }} data={data}>
          <XAxis tickLine={false} dataKey="name" />
          <YAxis dataKey="pv" hide={true} domain={[30, 'dataMax']} />
          <Tooltip />
          {/* <CartesianGrid vertical={false} verticalPoints={[0, 45, 75]} /> */}
          <ReferenceLine className='' y={30} stroke="#e5e5e5" >
            <Label position='insideTopLeft'  >
              30k
          </Label>
          </ReferenceLine>
          <ReferenceLine className='' y={45} stroke="#e5e5e5" />
          <ReferenceLine className='' y={60} stroke="#e5e5e5" >
            <Label position='insideTopLeft'  >
              60k
          </Label>
          </ReferenceLine>
          <ReferenceLine className='' y={75} stroke="blue" >
            <Label fill="#0058b2" position='insideTopLeft' content={<Smile1 />} />
          </ReferenceLine>
          <ReferenceLine className='' y={90} stroke="#e5e5e5" >
            <Label position='insideTopLeft'  >
              90k
          </Label>
          </ReferenceLine>
          <Bar barSize={5} dataKey="pt" fill="rgb(32, 174, 236)" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}


export default RechartBar