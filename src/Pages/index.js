import React from 'react';

import Header from '../assets/components/header'
import Body from '../assets/components/body'
import CardsBike from '../assets/components/cards'
import CardInferior from '../assets/components/cardInferior'
import Footer from '../assets/components/footer';
import Popup from '../assets/components/popup';

function BikeInit() {

const [popupOpen, setPopupOpen] = React.useState(false);
const [popupOpenFooter, setPopupOpenFooter] = React.useState(false);

const buttonSub = () => {
  setPopupOpenFooter(true);
    setPopupOpen(!popupOpen);
};

const togglePopup = () => {
  setPopupOpenFooter(false);
   setPopupOpen(!popupOpen);
};
  return (
    <div>
    <Header></Header>
    <Body></Body>
    <CardsBike></CardsBike>
    <CardInferior  togglePopup={togglePopup}></CardInferior>
    <Footer buttonSub={buttonSub}></Footer>
    <Popup
    tittle='SUBSCRIBE'
    visible={popupOpen}
    onClose={togglePopup}
    togglePopup={togglePopup}
    popupOpenFooter={popupOpenFooter}
>
</Popup>
    </div>
  );
}

export default BikeInit;
