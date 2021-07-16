import React from 'react';
import HeroSection from './HeroSection';
import Stickyicon from './Components/Stickyicon';
import SectionA from './SectionA';
import ServiceSection from './ServiceSection';
import ProjectSection from './ProjectSection';
import TestimoSection from './TestimoSection';
import ContactSection from './ContactSection';

const Home = ()=>{
    return(
        <>
        <br/>
        <br/>
        <br/>
       <div className='main-div align-items-center justify-content-center mb-5' >
       <HeroSection id='top'/>   
        <Stickyicon/>
       </div>
       <SectionA/>
        <ServiceSection/>
        <ProjectSection/>
        <TestimoSection/>
        <ContactSection/>
        </>
    );
};
export default Home;