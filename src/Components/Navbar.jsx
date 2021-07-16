import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <>
        <div className='container-fluid nav_bg'>
       <div className='row'>
           <div className='col-10'>
             <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
                <div className="container-fluid">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon top-bar "></span>
                    <span className="toggler-icon middle-bar "></span>
                    <span className="toggler-icon bottom-bar "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink exact className="nav-link active" aria-current="page" to="/" activeClassName='menu_active'>Home
                            </NavLink> </li>
                            <li className="nav-item">
                            <NavLink exact className="nav-link" to="/about" activeClassName='menu_active'>About
                            </NavLink></li>
                            <li className="nav-item">
                            <NavLink className="nav-link" to="/project" activeClassName='menu_active'>Projects
                            </NavLink> </li>
                            <li className="nav-item">
                            <NavLink  exact className="nav-link" to="/contact" activeClassName='menu_active'>Contact
                            </NavLink> </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>
            </div>
       </div>
   </div>
        </>
    );
};
export default Navbar;