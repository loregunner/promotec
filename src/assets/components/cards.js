import React, { useState } from 'react';

import bike1 from '../imagenes/bike1.png'
import bike2 from '../imagenes/bike2.png'
import bike3 from '../imagenes/bike3.png'
import bike4 from '../imagenes/bike4.png'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

import './index.scss';

const CardsBike = (props) => {

const imagenes = [
    { img: bike1 },
    { img: bike2 },
    { img: bike3 },
    { img: bike4 }
]

 const  [currentImg, setCurrentImg] = useState(0);

 return (
     <div className='carousel'>
         <div className='carouselInner'>
         <img className='img' alt='img' src={imagenes[currentImg].img}></img>
         <div className='titleD'> DE VULPIC 2021</div>
         <div className='titleC'>TM TRADICARY CARBON</div>
         <div className='titleE'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
         <Button variant="contained" className='button'>
        DISCOVERY TM TRADICARY CARBON
      </Button>
         <div className='left' onClick={() => currentImg > 0 && setCurrentImg(currentImg - 1)}>
             <ArrowBackIosIcon/>
         </div>
         <div className='right'  onClick={() => currentImg < imagenes.length - 1 && setCurrentImg(currentImg + 1)}>
          <ArrowForwardIosIcon/>
          </div>
         </div>
     </div>
 )
}

export default CardsBike;