import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import proj1 from './Images/proj1.png';
import ProjCard from './Components/ProjCard';
import ProjData from './Components/ProjData';
 // import Swiper JS
 import Swiper from 'swiper';
 // import Swiper styles
 import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

 // configure Swiper to use modules
 SwiperCore.use([Navigation, Pagination]);

 // init Swiper:
 const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    observer:true,
    observeParents:true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
   loop:true,
    pagination: {
      el: ".swiper-pagination",
    },
  },
  );

 const ProjectSection = ()=>{
    return(
        <>
        <br/>
        <br/>
        <br/>
       
        <h4 className='text-center'>See My Recent Works</h4>
        <h2 className='text-center'>Projects</h2>
        <div className='container-fluid sect-proj'>
        <div class="swiper-container mySwiper">
      <div class="swiper-wrapper">
        {ProjData.map((val,index)=>{
            return <ProjCard
                key={index}
                id={val.id}
                imgsrc={val.imgsrc}
                text={val.text}
                title={val.title}
            />
        })}
      </div>
     <div className='swiper-pagination'></div>
     
    </div>
           </div>
     

        
        </>
    );
};
export default ProjectSection;