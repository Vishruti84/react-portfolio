import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const Footer = ()=>{
    return(
        <>
            <div className='container-fluid footer py-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                            <h1 className=''>Know Me</h1>
                            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                             in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-12 align-items-center justify-content-center'>
                        <h1>Link</h1>
                            <ul>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/about'>About</a></li>
                                <li><a href='/project'>Projects</a></li>
                                <li><a href='/contact'>Contact</a></li>
                            </ul></div>
                        <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
                            <h1>Follow Me</h1>
                            <div className='follow-icon d-flex mb-5'>
                            <ul>
                            <li><a href='#' target='_blank' ><FacebookIcon className='facebook'/></a></li>
                            <li> <a href='#' target='_blank' ><InstagramIcon className='insta'/></a></li>
                            <li> <a href='#' target='_blank' ><LinkedInIcon className='linkedin'/></a></li>
                            </ul>
                            
                            </div>
                            <a href='#top'><button type="button" className="btn btn-secondary btn-tooltip animated" 
                            data-bs-toggle="tooltip" data-bs-placement="top" title="Go To Top">
                                 <ArrowUpwardIcon/>
                                </button></a>
                        </div>
                       
                    </div>
                </div>
                <div className='copyright '>
                        <h6 className='text-center'>Copyright ©  2021. All Rights Reserved. Design By Vishruti Agrawal</h6>
                    </div>
            </div>

        </>
    );
};
export default Footer;