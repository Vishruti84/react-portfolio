import React from 'react';

const TestimoCard = (prop1)=>{
    return(
        <>
            <div className="carousel-item  mt-3">
        <div className='img-box '>
          <img src={prop1.imgsrc} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-caption mt-5">
            <h5 className='mt-5'>{prop1.name}</h5>
            <p>"{prop1.text}"</p>
          </div>
    </div>
        </>
    );
};
export default TestimoCard;