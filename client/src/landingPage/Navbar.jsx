import React from "react";
import {Link } from "react-router-dom"
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
   return <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light border-bottom" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img className="mx-5" src="/media/logo.svg" style={{width:"25%"}}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 ms-auto ">
        
        <li className="nav-item mx-2 fs-6 pt-1">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li>
        <li className="nav-item mx-2 fs-6 pt-1">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item mx-2 fs-6 pt-1">
          <Link className="nav-link " to="/product">Products</Link>
        </li>
        <li className="nav-item mx-2 fs-6 pt-1">
          <Link className="nav-link " to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item mx-2 fs-6 pt-1">
          <Link className="nav-link " to="/support">Support</Link>
        </li>
         
    </ul>
    </div>
  </div>
</nav>
    </>
}
export default Navbar;
