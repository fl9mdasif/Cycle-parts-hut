import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
// import Reviews from './Reviews';
import ToolsOrParts from './ToolsOrParts';
import ContactForm from './ContactForm';
import Card from './Card';
import Reviews from '../Reviews/Reviews';
// import img from '../../img/01.jpg'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <ToolsOrParts></ToolsOrParts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;