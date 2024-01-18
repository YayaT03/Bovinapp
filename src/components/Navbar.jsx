import React from 'react'
import { Link } from 'react-router-dom'
import  "../components/estilo.css"
import LOGO1 from "../img/LOGO1.png"


const Navbar = () => {
    return (
        <div>
        <nav className="navbar colormenu fixed-top">

  <div className="container-fluid">

    <Link to="/" className="navbar-brand" style={{fontSize:"30px"}}>
      <img className="rounded-circle border border-5" src={LOGO1} style={{ width: 80 }} alt="" />
      BovinApp
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end colormenu" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BovinApp</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div className="offcanvas-body">

        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

          <li className="nav-item">
             <Link to="/" className='nav-link active'>Inicio</Link>
          </li>

          <li className="nav-item">
           <Link to="Blog" className='nav-link active'>Blog</Link>
          </li>
          
        </ul>

        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-dark" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>










</div>

    )
}

export default Navbar