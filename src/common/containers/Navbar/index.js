import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'


class Navbar extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/chart">
                  Chart
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/rechart">
                  Rechart1
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/bar">
                  Rechart2
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


export default Navbar