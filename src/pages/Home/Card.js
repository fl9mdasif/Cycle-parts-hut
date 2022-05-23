import React from 'react';
import CardInfo from './CardInfo';
import clock from '../../img/icons/clock.svg'
import marker from '../../img/icons/marker.svg'
import phone from '../../img/icons/phone.svg'


const Card = () => {
    return (
        <div className=" container mx-auto grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-3" >
            <CardInfo colors=" bg-gradient-to-r from-secondary to-primary" title="Opening Hours" img={clock} />
            <CardInfo colors="bg-gradient-to-r from-primary to-secondary" title="Visit Our Location" img={marker} />
            <CardInfo colors="bg-gradient-to-r from-secondary to-primary" title="Contact Us Now" img={phone} />
        </div >
    );
};

export default Card;