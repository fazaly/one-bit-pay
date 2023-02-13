import React from 'react';
import Contact from './Contact/Contact';
import Features from './Features/Features';
import FinancialSolutions from './FinancialSolutions/FinancialSolutions';
import Hero from './Hero/Hero';
import HeroSlider from './HeroSlider/HeroSlider';
import ImageGallery from './ImageGallery/ImageGallery';
import SendMoneySec from './sendMoneySection/SendMoneySec';
import WithdrawSection from './WithdrawSection/WithdrawSection';

const Home = () => {

    return (
        <div>
            {/* <HeroSlider></HeroSlider> */}
            <Hero/>
            <SendMoneySec/>
            <WithdrawSection/>
            <Features/>
            {/* <FinancialSolutions></FinancialSolutions> */}
            <ImageGallery></ImageGallery>
            <Contact></Contact>
        </div>
    );
};

export default Home;