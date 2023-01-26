import React from 'react';
import Contact from './Contact/Contact';
import FinancialSolutions from './FinancialSolutions/FinancialSolutions';
import HeroSlider from './HeroSlider/HeroSlider';
import ImageGallery from './ImageGallery/ImageGallery';

const Home = () => {
    return (
        <div>
            <HeroSlider></HeroSlider>
            <FinancialSolutions></FinancialSolutions>
            <ImageGallery></ImageGallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;