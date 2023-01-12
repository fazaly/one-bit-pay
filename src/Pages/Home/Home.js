import React from 'react';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import ImageGallery from './ImageGallery/ImageGallery';

const Home = () => {
    return (
        <div>
            <Hero/>
            <ImageGallery></ImageGallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;