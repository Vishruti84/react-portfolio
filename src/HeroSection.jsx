import React from 'react';
import img3 from './Images/img3.png';
import Typed from 'react-typed';
const HeroSection = ()=>{
    return(
        <>
         <div className="container align-items-center justify-content-center sect-h">
                    <div className=' text text-center'>
                    <Typed
                        strings={[
                            'WEB DESIGNER',
                            'FRONTEND DEVELOPER',
                            'WEB DEVELOPER'
                            ]}
                            typeSpeed={60}
                            backSpeed={20}
                            loop >
                        </Typed>
                        </div>
                        <h1 className='text-center '>Vishruti Agrawal</h1>
                        <div className='row'>
                            <div className=' col-lg-6 col-md-6 col-12 mx-auto'>
                            <img src={img3} alt='img1..' className="ban-img align-items-center justify-content-center "/>
                        
                                <div className=' col-lg-6 col-md-6 col-12  mx-auto text-center'>
                                    <p className='Ptext text-center'>I am a Web Designer and Developer practicing since 1.5 year.
                                    I love to Design and develope new web projects for the people.</p>
                                </div>
                            <div className='col-lg-6 col-md-6 col-12  mx-auto text-center'>
                            <button className='btn btn-info mx-auto' btnLink='/project' >See My Work</button>
                                </div>
                            </div>
            </div>
            </div>
        </>
    );
};
export default HeroSection;