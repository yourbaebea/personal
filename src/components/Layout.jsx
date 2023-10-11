import React, { Component } from "react";
//import style from "../style/navbar.module.css";
import style from "../style/page.module.css";
import classes from '../style/layout.module.css';
import TypingText from "./TypingText";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";

class Layout extends Component {

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

      <div className={style.content}>

        <div className={style.elContainer}>
          <div>
            <h1>Home</h1>
            <p>This designer works!</p>
          </div>

          <div className={style.finalContainer}>
          <div className={style.textContainer}><TypingText /></div>
          </div>
        </div>
        <div className={style.firstContainer}>
          <section id="about"></section>
          <About/>
        </div>
        <div className={style.endContainer}>
          <section id="work"></section>
          <Work/>
        </div>
        <div className={style.endContainer}>
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

export default Layout;
