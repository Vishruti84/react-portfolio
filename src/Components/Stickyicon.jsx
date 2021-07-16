import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const Stickyicon = ()=>{
    return(
        <>
       <div className='hero-social'>
           <div className='social-icon'>
               <ul>
                   <li><a href='#' target='_blank' ><FacebookIcon className='facebook'/></a></li>
                   <li> <a href='#' target='_blank' ><InstagramIcon className='insta'/></a></li>
                   <li> <a href='#' target='_blank' ><LinkedInIcon className='linkedin'/></a></li>
               </ul>
               </div>
       </div>

     
        </>
    );
};
export default Stickyicon;