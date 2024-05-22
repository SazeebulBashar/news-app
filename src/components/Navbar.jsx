import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/Business">Business </a>
            <a  className="nav-link" href="/General"> General </a>
            <a className="nav-link" href="/Technology"> Technology</a>
            <a className="nav-link" href="/Health">Health</a>
            <a className="nav-link" href="/Science"> Science </a>
            <a className="nav-link" href="/Sports">Sports</a>
            <a className="nav-link" href="/Entertainment">Entertainment</a>

            
                       
          </div>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar