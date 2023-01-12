import React from 'react';
import Contact from './Contact/Contact';
import FinancialSolutions from './FinancialSolutions/FinancialSolutions';
import ImageGallery from './ImageGallery/ImageGallery';

const Home = () => {
    return (
        <div>
            <FinancialSolutions></FinancialSolutions>
            <ImageGallery></ImageGallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;