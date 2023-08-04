import React, { Component } from 'react'
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  ReferenceLine,
  // CartesianGrid,
  CartesianAxis,
  Tooltip,
  Label,
  Text,
  ReferenceArea,
  // ReferenceDot,
} from 'recharts'
import Smile from '../Smile'
import ScoreLine from '../ScoreLine'


class CustomAxisTick extends Component {

  render() {
    // console.log(this.props)

    const { payload, y } = this.props

    if (payload.value === 2) {
      return (
        <Text y={y + 10} x={payload.coordinate} className='aprile' textAnchor={'middle'}>May</Text>
      )
    }

    if (payload.value === 7) {
      return (
        <Text y={y + 10} x={payload.coordinate} className='june' textAnchor={'middle'}>June</Text>
      )
    }

    if (payload.value === 12) {
      return (
        <Text y={y + 10} x={payload.coordinate} className='june' textAnchor={'middle'}>July</Text>
      )
    }

    if (payload.value === 17) {
      return (
        <Text y={y + 10} x={payload.coordinate} className='may' textAnchor={'middle'}>August</Text>
      )
    }

    if (payload.value === 22) {
      return (
        <Text y={y + 10} x={payload.coordinate} className='may' textAnchor={'middle'}>September</Text>
      )
    }

    if (payload.value === 27) {
      return (
        <Text y={y + 10} x={payload.coordinate} className='may' textAnchor={'middle'}>October</Text>
      )
    }


    else {
      return null
    }

  }
}

class ChartComponents extends Component {
  render() {
    const { data } = this.props

    return (
      <ResponsiveContainer width='100%' height={440}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>

          <XAxis dataKey="name" stroke="#e5e5e5" tick={<CustomAxisTick />} padding={{ right: 140 }} />

          <YAxis dataKey="pv" domain={[400, 'dataMax']} hide={true} />
          <Tooltip />

          <Line dot={{ r: 9 }} type="monotone" dataKey="pt" stroke="#20aeec" width={10} />
          <CartesianAxis className='axisX' y={430} x={10} width={150} height={150} />
          <ReferenceLine x={28} stroke="#20aeec" className='today'>
          </ReferenceLine>

          <ReferenceLine y={500} className='target' stroke="#0058b2" >
            <Label position='insideTopLeft' fill="#0058b2" >
              Target
            </Label>
            <Label fill="#0058b2" content={<Smile />} />
            <Label position='insideTopRight' fill="#0058b2">
              500
            </Label>
          </ReferenceLine>

          <ReferenceLine className='fair' y={550} stroke="#e5e5e5" >
            <Label position='insideTopLeft'  >
              Fair
                      </Label>
            <Label position='insideTopRight'>
              550
                      </Label>
          </ReferenceLine>

          <ReferenceLine className='low' y={480} stroke="#e5e5e5" >
            <Label position='insideTopLeft'>
              Low
                      </Label>
            <Label position='insideTopRight' >
              480
                      </Label>
          </ReferenceLine>
          <ReferenceArea className='refToday' x1={27} x2={29} y1={482} y2={498}>
            <Label className='scoreNum'>
              475
          </Label>
            <Label className='lineScore' content={<ScoreLine />} />
          </ReferenceArea>
          {/* <ReferenceDot className='refDot' x={28} y={475} r={10} fill="#20aeec" stroke="#fafafa" stroke-width={5} isFront={true} >
          </ReferenceDot> */}
          <ReferenceArea className='refToday' x1={27} x2={29} y1={450} y2={464}>
            <Label >
              Today
          </Label>
          </ReferenceArea>
        </LineChart>
      </ResponsiveContainer>
    )
  }
}


export default ChartComponents
