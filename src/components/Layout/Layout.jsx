import React, { Fragment } from 'react';
import Header from '../header/Header';

import HeroSection from '../hero-section/HeroSection';
import About from "../about/About";

import Services from "../services/Services";

const Layout = () => {
    return (
    <Fragment>
       <Header />
       <HeroSection />
       <About />
       <Services />
    </Fragment>
    );
    
};

export default Layout;