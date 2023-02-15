import React from 'react';
import BillPaySection from './BillPaySection/BillPaySection';
import Contact from './Contact/Contact';
import Features from './Features/Features';
import FinancialSolutions from './FinancialSolutions/FinancialSolutions';
import Hero from './Hero/Hero';
import HeroSlider from './HeroSlider/HeroSlider';
import ImageGallery from './ImageGallery/ImageGallery';
import SendMoneySec from './sendMoneySection/SendMoneySec';
import Testimonials from './Testimonials/Testimonials';
import WithdrawSection from './WithdrawSection/WithdrawSection';

const Home = () => {

    return (
        <div>
            <Hero />
            <SendMoneySec />
            <WithdrawSection />
            <Features />
            <BillPaySection />
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;