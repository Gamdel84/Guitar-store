import React from 'react'
import { Link } from 'react-router-dom';

export default function Servicios() {
  return (
    
        <>
        <div className='servicios'>
            <h2>♪♫ Servicios ♫♪</h2>
            <p className='p-serv'>Ofrecemos una variedad de servicios para satisfacer tus necesidades. Dejanos tu instrumento en boxes y te lo devolveremos como nuevo.</p>
            <div>
              <ol>
                <li>Calibración de instrumentos</li>
                <li>Encordados para todos los instrumentos</li>
                <li>Reparacion de instrumentos</li>
                <h3>Tambien tenemos:</h3>
                <li>Vientos</li>
                <li>Baterias</li>
                <li>Congas</li>
                <li>Platos</li>
                <li>Bajos</li>
                <li>Ukeleles</li>
                <li>Charangos</li>
                <li>Amplia gama de instrumentos de viento</li>
                <h3>Electronica:</h3>
                <li>Luces</li>
                <li>Microfonos</li>
                <li>Consolas</li>
                <li>Amplificadores</li>
                <li>Interfaces de grabación</li>
                <li>Mezcladoras</li>
                <h3>Pedaleras:</h3><li>La que busques</li>            
              </ol>
            </div>
            <div className='botones'>
              <Link to= "/"><button>Volver al inicio</button></Link>
            </div>
        </div>
        
        </>
  )
};

