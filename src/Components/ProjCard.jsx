import React from 'react';
import ProjData from './ProjData';

const ProjCard = (prop) =>{
    return (
        <>
                               <div class="swiper-slide">
        <div className='card1'>
            <div className='layer'></div>
            <div className='content'>
            <div className='imgBx'>
                <img src={prop.imgsrc} />
                </div>
                <p>{prop.text}</p>
               
                <div className='detail'>
                    <h2>{prop.title}</h2>
                </div>
            </div>
        </div>
         
        </div>                  
        </>
    );
};
export default ProjCard;
