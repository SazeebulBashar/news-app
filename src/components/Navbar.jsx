import  { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" to="/">
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
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/business">Business </NavLink>
            <NavLink className="nav-link" to="/general"> General </NavLink>
            <NavLink className="nav-link" to="/technology"> Technology</NavLink>
            <NavLink className="nav-link" to="/health">Health</NavLink>
            <NavLink className="nav-link" to="/science"> Science </NavLink>
            <NavLink className="nav-link" to="/sports">Sports</NavLink>
            <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>

            
                       
          </div>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar