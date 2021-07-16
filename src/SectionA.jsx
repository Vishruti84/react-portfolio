import React from 'react';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';

const SectionA = ()=>{
    return(
        <>
            <br/>
            <br/>
            <br/>
            <div className='container mt-5'>
                <div className='row gy-5'>
                    <div className='col-lg-6 col-md-6 col-12 head-data'>
                        <h2><span>A</span>BOUT ME</h2>
                        <p className='head-info'>Let Me Introduce Myself</p>
                        <p className='mt-4'>I am from Vadodara, Gujarat, India. A place of street food lovers and nature beauty.
                     Since my high school, I love design. I always try to design stuff with unique ideas and point of view.
                     I started coding in high school. Coding is always an art for me . Now I have opportunity
                      to design websites with coding. I find it interesting and enjoyed the process.</p>
                        <div className='btn-div d-flex'>
                        <a href='/project' target='_blank'>See My Work</a>
                        <a href='/about' target='_blank' className='read-btn'>Know More</a>
                        </div>

                    </div>
                    <div className='col-lg-6 col-md-6 col-12  sect-A d-block'>
                        <img src={img2} alt='img2' className='img-fluid img2 '/>
                        <img src={img1} alt='img1' className='img-responsive img1'/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SectionA;