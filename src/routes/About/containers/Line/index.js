import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ReactPerformance from 'react-performance'
import { bindActionCreators } from 'redux'
import {
  getLines,
  incrementLineQuantity,
} from './actions'
import {
  selectLines,
  isLoading,
} from './selectors'
import LineItem from '../../components/LineItem'
import Spinner from '../../../../common/components/Spinner'


class Line extends Component {

  componentDidMount() {
    this.props.getLines()
  }

  handleIncrement = id => {
    this.props.incrementLineQuantity(id)
  }

  renderLine = lines => {
    return lines.map(line => {
      return <LineItem
        key={line.id}
        id={line.id}
        text={line.text}
        quantity={line.quantity}
        handleIncrement={this.handleIncrement}
      />
    })
  }

  render() {
    const { lines, loading } = this.props

    let lineContent;

    if (lines === null || loading) {
      lineContent = <Spinner />
    } else {
      if (lines !== null) {
        lineContent = this.renderLine(lines)
      }
    }

    return (
      <div>
        {lineContent}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  lines: selectLines(state),
  loading: isLoading(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getLines,
  incrementLineQuantity,
}, dispatch)


// export default connect(mapStateToProps, mapDispatchToProps)(Line)

export default ReactPerformance.connect({
  mapStateToProps,
  mapDispatchToProps,
  getId: 'Line',
  Component: Line,
})