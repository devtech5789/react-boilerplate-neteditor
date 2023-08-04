import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './cardItem.scss'


class CardItem extends Component {
  constructor() {
    super()
    this.state = {
      opened: false
    }
  }

  handleToggle = () => {
    this.setState({ opened: !this.state.opened })
  }

  render() {
    const {
      title,
      picture,
      description
    } = this.props

    return (
      <div className="row">
        <div className='col-md-12'>
          <div
            className={this.state.opened ? 'opened' : 'closed'}
            onClick={this.handleToggle}
          >
            <div className='header'>
              <span className='icon'>&#9654;</span>
            </div>
            <div className='body'>
              <img src={picture} alt={title} />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}


export default CardItem