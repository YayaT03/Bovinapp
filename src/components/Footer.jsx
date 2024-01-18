import React from 'react'
import { Link } from 'react-router-dom'                                                                                   

const Footer = () => {
  return (
    <div>

    <footer >
   <div className="container-md ">

   <i className="fa-brands fa-facebook fa-2xl me-3" ></i> 
   <Link to="https://www.facebook.com">Facebook </Link> <br></br> <br></br>

   <i className="fa-brands fa-instagram fa-2xl me-3 "> </i>  
   <Link to="https://www.instagram.com">Instagram</Link> <br></br> <br></br>

   <p1>BovinApp, Copyright &copy; 2023</p1>
   <br></br>
   <br></br>
   <p1>Santa Rosas De Osos-Antioquia,Colombia</p1>

   </div>
   
</footer>

    </div>
  )
}

export default Footer