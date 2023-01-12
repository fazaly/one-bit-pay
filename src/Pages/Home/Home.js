import React from 'react';
import Contact from './Contact/Contact';
import FinancialSolutions from './FinancialSolutions/FinancialSolutions';
import Hero from './Hero/Hero';
import ImageGallery from './ImageGallery/ImageGallery';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <FinancialSolutions></FinancialSolutions>
            <ImageGallery></ImageGallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;