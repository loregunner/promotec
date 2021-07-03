import React from 'react';

import './index.scss';

import Button from '@material-ui/core/Button';

function CardInferior(props) {
  return (
<div className='cardInferior'>
    <div className='title'>Lorem Ipsum is simply dummy text</div>
    <div className='informacion'>¿NECESITAS MAS INFORMACIÓN?</div>
<div className='botonAgendar'>
    <Button variant="contained" className='button' onClick={props.togglePopup}>
        AGENDAR CITA
      </Button>
      </div>
</div>
  );
}

export default CardInferior;