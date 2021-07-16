
import React from 'react';
import img1 from './Images/img1.png';
import TestimoData from './Components/TestimoData';
import TestimoCard from './Components/TestimoCard';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const TestimoSection = ()=>{
    return(
        <>
        <br/>
        <br/>
        <br/>
        <div className='container mb-5'>
        <h4 className='text-center'>See What Client's Says</h4>
        <h1 className='text-center mb-5'>TESTIMONIAL</h1>
        <div className='row'>
          <div className='col-md-8 col-center m-auto'>
          <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div className="carousel-inner pt-5" style={{backgroundColor:'black'}}>
        <div className="carousel-item active  mt-3 ">
              <div className='img-box '>
                <img src={img1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-caption mt-5">
                  <h5 className='mt-5'>Jenn Steve</h5>
                  <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur There is no 
                  one who loves pain itself who seeks after it and wants to have it, simply because it is pain..."</p>
                </div>
          </div>
          
          {
            TestimoData.map((val,index)=>{
              return <TestimoCard
                key={index}
                  id={val.id}
                  imgsrc={val.imgsrc}
                  name={val.name}
                  text={val.text}
              />
            })

          }
       </div>
          </div>
            </div>
          </div>
        </div>
        </>
    );
};
export default TestimoSection;
/**/
