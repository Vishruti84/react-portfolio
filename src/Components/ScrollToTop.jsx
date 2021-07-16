import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const ScrollToTop = () =>{
    const {pathname} = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    });
    return <div/>;
};
export default ScrollToTop;