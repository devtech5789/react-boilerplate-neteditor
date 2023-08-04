import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './lineItem.scss'

class LineItem extends PureComponent {
  render() {
    const {
      text,
      quantity,
      id,
      handleIncrement
    } = this.props

    return (
      <div className='container lineItem'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-5'>
                <span>{text}</span>
              </div>
              <div className='col-md-1'>
                <span>|</span>
              </div>
              <div className='col-md-3 text-center'>
                <span>{quantity}</span>
              </div>
              <div className='col-md-1'>
                <span>|</span>
              </div>
              <div className='col-md-2'>
                <span>
                  <button onClick={() => handleIncrement(id)}>
                    +
                </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

LineItem.propTypes = {
  text: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
}


export default LineItem