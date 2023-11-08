import React, { Component} from "react";
import classes from './style/app.module.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Home from "./components/Home";

export default class App extends Component {

  scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  render() {
    
    return (
      <div>
      <div className={classes.container}>

      <section id="navbar"></section>
        <div className={classes.nav}>
        <div className={classes.navBar}>
          {/*<div className={classes.navHome}><a href='#navbar' onClick={() => this.scrollToSection('#navbar') }>Home</a></div>*/}
          <div className={classes.navOptions}>
            <div className={classes.navigation}><a href='#about' onClick={() => this.scrollToSection('#about') }>About</a></div>
            <div className={classes.navigation}><a href='#work' onClick={() => this.scrollToSection('#work') }>Work</a></div>
            <div className={classes.navigation}><a href='#contact' onClick={() => this.scrollToSection('#contact') }>Contact</a></div>
          </div>
        </div>
        </div>
      </div>

      <div className={classes.content}>

        <div className={classes.elContainer}>
          <Home/>
        </div>
        <div className={classes.firstContainer}>
          <section id="about"></section>
          <About/>
        </div>
        <div className={classes.endContainer}>
          <section id="work"></section>
          <Work/>
        </div>
        <div className={classes.endContainer}>
          <section id="contact"></section>
          <Contact/>
        </div>

       
      </div>

      <div className={classes.footer}>
        <div className={classes.footerTM}>Web Development 2023</div>
      </div>
    
    </div>
    );
  }
}