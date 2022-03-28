import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import '../../assets/scss/main.scss';
const LandingPage = () => {

    return (
        <div className="wrapper">
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
export default LandingPage;

