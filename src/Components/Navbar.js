import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
      <img src="https://seeklogo.com/images/M/m-design-logo-09A5D82F03-seeklogo.com.png" alt="" width="30" height="24"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/main">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact Me</Link>
        </li>
      </ul>
      {/* login-btn */}
      <Link to="/login" type="button" className="btn btn-success">Success</Link>
    </div>
  </div>
</nav>
        </div>
    )
}
