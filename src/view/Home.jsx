import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='row justify-content-center imgfondo'>

      <div className='container md '>

        <p className='display-3  strong frase ' >
        Bienvenidos a la app que te ayudara a llevar el control de tu ganaderia</p>

        <p className='parrafo display-6 mt-5'>Ideal para no perderte ninguna fecha importante y olvidarte de incomodos cuadernos
          y multiples hojas sin orden y que se pierden facil
        </p>

        <div className='mt-5'>
          <button type="button " className="btn btn-light"><Link to="Login">Iniciar</Link></button>
        
        </div>

        
      
      </div>
      
      <Footer />
    </div>


  )
}

export default Home