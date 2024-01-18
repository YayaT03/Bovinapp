import React from 'react'
import { Link } from 'react-router-dom'
import ima1 from "../img/ima1.jpg"
import Footer from "../components/Footer"


const Blog = () => {
  return (

    <div className='margen img '>
         
        <header className="bg-ligth 'Cabin', sans-serif"></header>

        <strong className='display-6 mt-4 '> 
       Aquí informaremos las noticias más relavantes, las actualizaciones más recientes y
       los temas de interés general.  </strong>
      
      <div className="container md mt-4  d-none d-md-block">
        <div className="row">

          <div className="col-4">

            <strong className='h3' >Una Vaca por la Paz continúa convocando a la solidaridad colombiana</strong>
            
            <p className='mt-4'>
            Personalidades del sector bovino han aplaudido la iniciativa de la Fundación Colombia Ganadera
            (FUNDAGÁN) de revivir su programa de corte social Una Vaca por la Paz, cuyo fin es
             beneficiar a 1500 familias del sector rural en condición de pobreza con la entrega 
             una vaca preñada para, de esta manera, aportar en la reconstrucción del tejido social en el país.
            </p>
            <p><Link to="https://www.fedegan.org.co/noticias/una-vaca-por-la-paz-continua-convocando-la-solidaridad-colombiana" 
            className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Ir al articulo completo</Link></p>
          </div>

          <div className="col-4">
            <strong className='h3'>Red de Innovación en Ganadería Sostenible de Cundinamarca</strong>
            <p className='mt-4'>El propósito de la investigación fue Incrementar el uso del conocimiento técnico - 
              científico en ganadería bovina sostenible, en productores de 14 municipios del departamento 
              de Cundinamarca, mediante la implementación de tecnologías 4.0, la metodología de gestión 
              del conocimiento y el análisis de redes sociales de innovación.</p>
            <img src={ima1} className="w-50" alt="ima1" />
            <p><Link to="https://www.fedegan.org.co/red-de-innovacion-en-ganaderia-sostenible-de-cundinamarca" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Conoce la investigación aquí</Link></p>
          </div>
          
          <div className="col-4">
            <strong className='h3'>Firmados los protocolos de exportación para la carne bovina y quinua a China</strong>
            <p className='mt-4'>“Para Colombia, China es un país aliado prioritario con el que queremos 
            contar para intensificar nuestro comercio agropecuario y diversificar nuestra oferta con 
            productos de la mayor calidad. Desde el ICA, recibimos con agrado esta noticia y
            continuaremos trabajando para avanzar con los procesos de admisibilidad y seguir 
            fortaleciendo los lazos comerciales con este país. De esta manera aportamos al crecimiento,
            competitividad y productividad del campo colombiano”, 
            explicó Juan Fernando Roa, gerente General del ICA.</p>
           
            <p><Link to="https://www.ica.gov.co/noticias/firmado-exportacion-carne-bovina-y-quinua-a-china" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Conoce el tratado aquí</Link></p>
          </div>




      </div>
      </div>


      <div className='d-md-none '>
        
        <div className='card border-3 img'>
         
          <div className='card-body'>
            <p className='card-text'>
             <strong className='h3' >Una Vaca por la Paz continúa convocando a la solidaridad colombiana</strong>
        </p>
        <p className='mt-4'>
        Personalidades del sector bovino han aplaudido la iniciativa de la Fundación Colombia Ganadera
        (FUNDAGÁN) de revivir su programa de corte social Una Vaca por la Paz, cuyo fin es
         beneficiar a 1500 familias del sector rural en condición de pobreza con la entrega 
         una vaca preñada para, de esta manera, aportar en la reconstrucción del tejido social en el país.
        </p>
        <p><Link to="https://www.fedegan.org.co/noticias/una-vaca-por-la-paz-continua-convocando-la-solidaridad-colombiana"
           className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Ir al articulo completo</Link></p>    
   
  
   <p className='card-text'>
    <strong className='h3'>Red de Innovación en Ganadería Sostenible de Cundinamarca</strong>
        <p className='mt-4'>El propósito de la investigación fue Incrementar el uso del conocimiento técnico - 
          científico en ganadería bovina sostenible, en productores de 14 municipios del departamento 
          de Cundinamarca, mediante la implementación de tecnologías 4.0, la metodología de gestión 
          del conocimiento y el análisis de redes sociales de innovación.</p>
        <img src={ima1} className="w-50" alt="ima1" />
        <p><Link to="https://www.fedegan.org.co/red-de-innovacion-en-ganaderia-sostenible-de-cundinamarca" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Conoce la investigación aquí</Link></p>
    </p>

    <p className='card-text'>
    <strong className='h3'>Firmados los protocolos de exportación para la carne bovina y quinua a China</strong>
        <p className='mt-4'>“Para Colombia, China es un país aliado prioritario con el que queremos 
            contar para intensificar nuestro comercio agropecuario y diversificar nuestra oferta con 
            productos de la mayor calidad. Desde el ICA, recibimos con agrado esta noticia y
            continuaremos trabajando para avanzar con los procesos de admisibilidad y seguir 
            fortaleciendo los lazos comerciales con este país. De esta manera aportamos al crecimiento,
            competitividad y productividad del campo colombiano”, 
            explicó Juan Fernando Roa, gerente General del ICA.</p>
        
        <p><Link to="https://www.ica.gov.co/noticias/firmado-exportacion-carne-bovina-y-quinua-a-china" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Conoce el tratado aquí</Link></p>
    </p>






    </div>
     </div>
</div>
<Footer />

      </div>
      )
}
      export default Blog