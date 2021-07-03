import React from 'react';

import './index.scss';
import img from '../imagenes/picas.png';
function Header() {
  return (
    <header>
      <div className='headerFree'>
        <div className='title'>
          Free your heard | <div className='ride'> Ride De Public Bicke</div>
        </div>
      </div>
      <div className='vulpic'>
        {' '}
        <h1>
          DE VULPIC<img className='img' alt='img' src={img}></img>
        </h1>
      </div>
      <div className='anclas'>
        <a href="/">TIENDA</a>
        <a href="/">ROPA</a>
        <a className='seleccion' href="/">COLECCION</a>
        <a href="/">RACING</a>
        <a href="/">HISTORIA</a>
        <a href="/">NOTICIAS</a>
        <a href="/">GARANTIA</a>
        </div>
    </header>
  );
}

export default Header;
