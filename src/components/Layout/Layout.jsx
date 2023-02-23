import React, { Fragment } from 'react';
import Header from '../header/Header';

import HeroSection from '../hero-section/HeroSection';
import About from "../about/About";

import Services from "../services/Services";

import Portfolio from '../portfolio/Portfolio';

import Contact from '../contact/Contact';

import Form from '../form/Form';

import Footer from '../footer/Footer';

const Layout = () => {
    return (
    <Fragment>
       <Header />
       <HeroSection />
       <About />
       <Services />
       <Portfolio />
       <Contact />
       <Form />
       <Footer />
    </Fragment>
    );
    
};

export default Layout;