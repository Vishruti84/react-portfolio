
import React from 'react';

import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import  Navbar  from './Components/Navbar';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';
import ScrollToTop from './Components/ScrollToTop';
const App = () => {
  return (
    <>
   <Router>
     <Navbar/>
     <ScrollToTop/>
    <Switch>
    <Route exact path='/' >
      <Home/>
    </Route>
      <Route exact path='/about' >
        <About/>
      </Route>
      <Route exact path='/project' >
        <Project/>
      </Route>
      <Route exact path='/contact' >
        <Contact/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
    
    </>
    
  );
};

export default App;
