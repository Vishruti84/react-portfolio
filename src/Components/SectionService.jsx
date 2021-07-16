/**this is card to be shown on service section page */
import React from 'react';


 const   SectionService = (props) =>{
    return(
        <>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card my-5" style={{width: '18rem'}}>
                    {props.imgsrc}
                        <div className="card-body">
                            <h5 className="card-title mt-2">{props.title}</h5>
                            <p className="card-text mt-2">{props.text}</p>
                        </div>
                    </div>
                    </div>   
                    
           
        </>
    );
};
export default SectionService;
/*   */