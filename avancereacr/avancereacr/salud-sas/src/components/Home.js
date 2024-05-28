import React from 'react'
import imagensas from './saludsas.jpg'

const Home = () => {
  return <main className="caja">
  <div>
  <img src={imagensas} className="imagen" alt='imagen'/>
  </div>
  <div>
        <article className="caja c2">
            <h3>¡Bienvenido al sistema de Consulta de la Base de Datos Única de Afiliados
                     - BDUA, del Sistema General de Seguridad Social en Salud!</h3>
                <p>Si necesita retirarse, trasladarse, modificar sus datos o su estado de afiliación 
                    en el Sistema General de Seguridad Social en Salud. ​
                    De igual forma se pueden realizar estos trámites a través del portal del Sistema de Afiliación
                     Transaccional – SAT, siguiendo el enlace: https://www.miseguridadsocial.gov.co. Si la EPS no 
                     brinda una solución oportuna a la petición relacionada con su afiliación, por favor dirigirse 
                     a la Superintendencia Nacional de Salud, organismo que cumple funciones de inspección, 
                     vigilancia y control en el SGSSS.</p><br/><br/>
                     <footer className="caja c3">
                     <h3>Ley de Transparencia EPS</h3>
                     <p>Ley 1712 de 2014: “Por medio de la cual se crea la Ley de Transparencia y del derecho de acceso a la Información Pública Nacional y se dictan otras disposiciones”.​</p>
                 </footer>
                     </article>
        
        </div>
      
    </main>
}

export default Home
