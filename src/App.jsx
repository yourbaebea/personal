import React, { Component} from "react";
import Layout from "./components/Layout";

import Home from './pages/Home';
/*
import NotFound from './pages/Not Found';
import Contact from './pages/Contact';
import About from './pages/About';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

*/

export default class App extends Component {
  render() {
    
    return (
      <div>
        <Layout page={<Home />}/>
        {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout page={<Home />} />} />
          <Route exact path="/about" element={<Layout page={<About />} />} />
          <Route exact path="/contact" element={<Layout page={<Contact />} />} />
          <Route path="/*" element={<Layout page={<NotFound />} />} />
        </Routes>
      </BrowserRouter>*/}
      

      
      
      </div>
    );
  }
}