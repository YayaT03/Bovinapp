import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div>

        <footer className="text-white" >
          <div className="container-md ">

            <ul className="list-inline">
              <li className="list-inline-item me-4">
                <Link to="https://www.facebook.com" className="link-dark"><i className="fa-brands fa-facebook fa-2xl"></i></Link>
              </li>
              

              <li className="list-inline-item me-4">
                <Link to="https://instagram.com" className="link-dark"><i className="fa-brands fa-instagram fa-2xl"></i></Link>
              </li>
              
            </ul>
            <p className="copyright text-dark ">BovinApp © 2024</p>

          </div>
        </footer>
      </div>
    </div>

  )
}

export default Footer