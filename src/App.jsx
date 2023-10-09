import React, { Component, setState } from "react";
import Layout from "./components/Layout";
import Home from './pages/Home';
import NotFound from './pages/Not Found';
import Contact from './pages/Contact';
import About from './pages/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    
    return (
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout page={<Home />} />} />
          <Route path="/about" element={<Layout page={<About />} />} />
          <Route path="/contact" element={<Layout page={<Contact />} />} />
          <Route path="/*" element={<Layout page={<NotFound />} />} />
        </Routes>
      </BrowserRouter>

      
      
      </div>
    );
  }
}