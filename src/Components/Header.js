import React from "react";
import {
  Link
} from "react-router-dom";
export default function Header(props) {

  
  return (
    <div>
      <nav className={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">NewsShort</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/General" >General</Link>
              </li><li className="nav-item">
                <Link className="nav-link" to="/Business">Business</Link>
              </li><li className="nav-item">
                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
              </li><li className="nav-item">
                <Link className="nav-link" to="/Health">Health</Link>
              </li><li className="nav-item">
                <Link className="nav-link" to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
            </ul>
            
            <div className={`form-check form-switch ms-5 me-0 text-${props.mode==='light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  )
}
