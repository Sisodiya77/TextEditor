import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props){
  return (
    <>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">

      <ul className="navbar-nav">
        <li className="nav-item">
            
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
  
    <div className="form-check form-switch">
    </div>
</div>
  </div>
</nav>
<div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`} >
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
    </>
  )
}
