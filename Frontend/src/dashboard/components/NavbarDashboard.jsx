import React from 'react'
import LOGO1 from '../images/LOGO1.png'
import { Link } from 'react-router-dom';


const NavbarDashboard = () => { 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark colormenu">
        <div className="container-fluid">

          <Link to="/" className="navbar-brand">
            <img className="rounded-circle border border-5" src={LOGO1} style={{ width: 100 }} alt="" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse"  id="navbarNav">

            <ul className="navbar-nav mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to="/aplication" className="nav-link text-dark" >
                  <i className="fa-solid fa-house fa-sm me-2"></i>Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link to="reservas" className="nav-link text-dark" >
                  <i className="fa-solid fa-cow fa-sm me-2"></i>Animal
                </Link>
              </li>

              <li className="nav-item">
                <Link to="proveedores" className="nav-link text-dark" >
                  <i className="fa-solid fa-cow fa-sm me-2"></i>Registro novillas
                </Link>
              </li>

              <li className="nav-item">
                <Link to="paquetes" className="nav-link text-dark">
                  <i className="fa-solid fa-calendar-days fa-sm me-2"></i>Partos
                </Link>
              </li>

              <li className="nav-item">
                <Link to="destinos" className="nav-link text-dark" >
                  <i className="fa-regular fa-calendar-check fa-sm me-2"></i>Secado
                </Link>
              </li>

              <li className="nav-item">
                <Link to="cliente" className="nav-link text-dark" >
                  <i className="fa-solid fa-table fa-sm me-2"></i>palpacion
                </Link>
              </li>

              <li className="nav-item">
                <Link to="proveedores" className="nav-link text-dark" >
                  <i className="fa-solid fa-seedling fa-sm me-2"></i>Inseminacion
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="proveedores" className="nav-link text-dark" >
                  <i className="fa-solid fa-pencil fa-sm me-2"></i>Inventario termo
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button"  data-bs-toggle="dropdown" aria-expanded="false"
                >
                  <i className="fa-solid fa-user-tie fa-sm me-2"></i>
                  Usuario
                </Link>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item">
                      <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                      Perfil
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <Link className="dropdown-item"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>Configurción</Link>
                  </li>

                  <li>
                    <Link className="dropdown-item"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>Registro de actividades</Link>
                  </li>

                  <li>
                    <Link to="/login" className="dropdown-item"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                      Cerrar sesión
                    </Link>
                  </li>

                </ul>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarDashboard;