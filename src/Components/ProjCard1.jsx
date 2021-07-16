import React from 'react';


const ProjCard1 = (prop) =>{
    return (
        <>
                                <div className="card  card1 mx-3 my-4" style={{width: '18rem'}}>
                    <a href={prop.link}><img src={prop.imgsrc}   className="card-img-top align-items-center justify-content-center" alt='..icon'/></a>
                        <div className="card-body">
                            <h5 className="card-title mt-2">{prop.title}</h5>
                            <p className="card-text mt-2">{prop.text}</p>
                        </div>
                    </div>                    
        </>
    );
};
export default ProjCard1;