import React from 'react';

import img from '../imagenes/logo.png';

import facebook from '../imagenes/facebook.png';
import linkedln from '../imagenes/linkedln.png';
import insta from '../imagenes/insta.png';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import './index.scss';



function Footer(props) {


  return (
<div className='footer'>
 <div className='img'>
 <img className='img' alt='img' src={img}></img>
 </div>
 <div className='links'>
     <div className='terminos'>
         <h3>TERMS AND CONDITIONS</h3>
         <p><a href="/">Click aqui</a> para descargar los terminos y condiciónes </p>
     </div>
     <div className='contacto'>
         <h3>CONTACT SUPPOR</h3>
         <p>Enviar email a <a href="/">ayuda@vulpic.com</a> para asistencia</p>
     </div>
     <div className='help'>
         <h3>HELP CENTER</h3>
         <p>Necesitas ayuda contactanos<a href="/"> Centro de ayuda</a> </p>
     </div>
     <div className='social'>
         <h3>SOCIAL</h3>
         <img className='facebook' alt='img' src={facebook}></img>
         <img className='instagran' alt='img' src={insta}></img>
         <img className='linkedln' alt='img' src={linkedln}></img>
     </div>
 </div>
 <div className='derechos'>
     <p>Powered by <span>Bike-room S.R.L</span> &copy; 2020 De Vulpic Ugg & Figly Srl - Todos los derechos reservados </p>
 </div>
 <Card className='cardFooter' variant="outlined">
      <CardContent>
        <Typography  className='sub' variant="subtitle2" component="h2">
        SUBSCRIBE TO OUR NEWSLETTER
        </Typography>
        <Typography variant="body2" component="h2">
          Receive exclusive offers and promotions
        </Typography>
        <div className='cardInterior'>
        <Typography variant="body2" component="p">
          Insert you email 
          <CardActions>
        <Button className='subButton' onClick={props.buttonSub}>SUBSCRIBE</Button>
      </CardActions>
          <br />

          <Checkbox
            name="checkedB"
            color="primary"
            className='box'
          />
          <div className='parrafo'>By cheking this box you would like to receive more information about our products/services, evente, news and offers</div>
          </Typography>
      </div>
      </CardContent>
    </Card>
    <div className='digital'> DIGITAL EXPERIENCE </div>
</div>

  );
}

export default Footer;