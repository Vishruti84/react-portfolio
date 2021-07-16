/**this is page to be shown on home page service section */
import React from 'react';
import SectionService from './Components/SectionService';
import ServData from './Components/ServData';
const ServiceSection = ()=>{
    return(
        <>
         <div className="my-5 sect-S">
         <h4 className='text-center'>WHAT I CAN DO FOR YOU</h4>
             <h1 className="text-center" >Services</h1>
     </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row gy-1">
                   {
                       ServData.map((val,index)=>{
                           return <SectionService
                                key={index}
                               imgsrc={val.imgsrc}
                               title={val.title}
                               text={val.text}
                           />
                       })
                   }
                </div> 
                </div>
            </div>
        </div>
        </>
    );
};
export default ServiceSection;