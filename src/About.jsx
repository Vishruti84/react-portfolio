import React from 'react';
import img9 from './Images/img9.jpg';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
const About = ()=>{
    return(
        <>
         <br/>
        <br/>
        <br/>
        
<div className='container abt-p  mt-5'>
             <div className='row gy-0'>
                 <div className='col-lg-6 col-md-6 col-12 order-sm-first   order-sm-1 order-1'>
                     <p className='p-abt'>I am Vishruti Agrawal</p>
                     <h2>A web Designer & Developer</h2>
                     <p className='abt-text mt-3'>I am from Vadodara, Gujarat, India. A place of street food lovers and nature beauty.
                     Since my high school, I love design. I always try to design stuff with unique ideas and point of view.
                     </p>
                     <p className='abt-text'>I started coding in high school. Coding is always an art for me . Now I have opportunity
                      to design websites with coding. I find it interesting and enjoyed the process.</p>
                      <p className='abt-text mb-4'>My vision is to make the world a better place. Its high time to make it even better.</p>
                    <a href='' className='abt-btn'>Download CV</a>
                 </div>
                 <div className='col-lg-6 col-md-6 col-12 order-2 mt-3'>
                     <img src={img9} alt='abt-img...' className='h-25'/>
                 </div>
             </div>
             <div className='container abt-skill'>
             <h2 className='mb-4 mt-5'>EDUCATION</h2>
             <div className='d-flex flex-row'>
             <h4>School</h4>
             <ul>
                     <li>Baroda High School ONGC , Vadodara</li>
                 </ul>
             </div>
             <div className='d-flex flex-row'>
             <h4 >College</h4>
             <ul>
                    <li>Neotech Technical Campus,Harni-Virod, Vadodara</li>
                 </ul>
             </div>
             <div className='d-flex flex-row'>
             <h4 >Varsity</h4>
             <ul>
                     <li>Gujarat Technological University Affiliated</li>
                 </ul>
             </div>
         </div>
         <div className='container abt-skill mt-5'>
             <h2 className='mb-4'>My Technical Skills</h2>
             <div className='d-flex flex-row'>
             <h4>FrontEnd</h4>
             <ul className='d-lg-flex flex-lg-row d-md-flex flex-md-row d-flex flex-column'>
                     <li className='text-center'>HTML</li>
                     <br/>
                     <li>CSS</li>
                     <br/>
                     <li>BOOTSTRAP 4/5</li>
                     <br/>
                     <li>JAVASCRIPT</li>
                     <br/>
                     <li>REACT</li>
                 </ul>
             </div>
             <div className='d-flex flex-row'>
             <h4 >BackEnd</h4>
             <ul className='d-flex flex-row'>
                    <li>Mysql</li>
                    <li>PHP</li>
                 </ul>
             </div>
             <div className='d-flex flex-row'>
             <h4 >Framework</h4>
             <ul className='d-flex flex-row'>
                     <li>Wordpress</li>
                 </ul>
             </div>
         </div>
         <div className='container abt-skill mt-5 mb-5'>
             <h2 className='mb-4'>Experience</h2>
             <div className='row align-items-center connecting-lines d-flex'>
                 <div className='col-2 text-center bottom d-inline-flex justify-content-center align-items-center'>
                     <div className='circle font-weight-bold'><span><DoneOutlineIcon/></span></div>
                 </div>
                 <div className='col-6'>
                     <h4>Sept~2020 - Nov~2020</h4>
                     <p>Did internship with startup named ClassAndClass for 2 months as a Frontend WebDeveloper.
                     There i worked on 3 live projects.</p>
                 </div>
             </div>
             <div className='row timeline'>
                 <div className='col-2'>
                     <div className='corner top-right'></div>
                 </div>
                 <div className='col-8'>
                    <hr/>
                 </div>
                 <div className='col-2'>
                     <div className='corner left-bottom'></div>
                 </div>
             </div>
             <div className='row align-items-center justify-content-end connecting-lines d-flex'>
                 <div className='col-6 text-right'>
                     <h4>May~2021</h4>
                     <p>Did summer internship at Akash Technolabs for 2 weeks as a Php intern where i designed a Wordpress website.</p>
                 </div>
                 <div className='col-2 text-center full d-inline-flex justify-content-center align-items-center'>
                 <div className='circle font-weight-bold'><span><DoneOutlineIcon/></span></div>
                 </div>
             </div>
             <div className="row timeline">
                 <div className='col-2'>
                     <div className='corner right-bottom'></div>
                 </div>
                 <div className='col-8'>
                     <hr/>
                 </div>
                 <div className='col-2'>
                     <div className='corner top-left'></div>
                 </div>
             </div>

             </div>
</div>
            

         
         
        
        </>
    );
};
export default About;