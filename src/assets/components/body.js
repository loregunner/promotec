import React from 'react';

import './index.scss';
import img from '../imagenes/body.png' 

function Body() {
  return (
      <div className='body'>
          <div>
        <div className='coleccion'>COLECCIÓN</div>
        <div className='modelos'>MODELOS AÑOS 2021</div>
        <p>Nuestra coleccion, nuestras bicicletas, nuestro latido..... chekealo, sientelo experimentalo</p>
        <img className='imgBody' alt='img' src={img}></img>
      </div>
      </div>
        );
}

export default Body;
