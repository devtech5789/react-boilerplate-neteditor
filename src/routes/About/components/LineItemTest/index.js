import React from 'react'
import PropTypes from 'prop-types'

import './lineItem.scss'


const LineItem = ({
  id,
  text,
  quantity,
  handleIncrement,
}) => {


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


LineItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
}


export default LineItem