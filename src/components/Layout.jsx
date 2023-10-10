import React, { Component } from "react";
//import style from "../style/navbar.module.css";
import style from "../style/page.module.css";
import classes from '../style/layout.module.css';
import TypingText from "./TypingText";
import About from "./About";
import Contact from "./Contact"

class Layout extends Component {

  scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  
  render() {
    const { page } = this.props;

    return (
    <div>
      <div className={classes.container}>
      <section id="navbar"></section>
        <div className={classes.nav}>
        <div className={classes.navBar}>
          <div className={classes.navHome}><a href='#home' onClick={() => this.scrollToSection('#home') }>Home</a></div>
          <div className={classes.navOptions}>
            <div className={classes.navigation}><a href='#about' onClick={() => this.scrollToSection('#about') }>About</a></div>
            <div className={classes.navigation}><a href='#contact' onClick={() => this.scrollToSection('#contact') }>Contact</a></div>
          </div>
        </div>
        </div>
      </div>

      <div className={style.content}>

        <div className={style.elContainer}>
          <section id="home"></section>
          <div>
            <h1>Home</h1>
            <p>This designer works!</p>
          </div>

          <div className={style.finalContainer}>
          <div className={style.textContainer}><TypingText /></div>
          </div>
        </div>
        <div className={style.elContainer}>
          <section id="about"></section>
          <About/>
        </div>
        <div className={style.endContainer}>
          <section id="contact"></section>
          <Contact/>
        </div>
      </div>

      <div className={classes.footer}>
        <div><a href='#nabar' onClick={() => this.scrollToSection('#navbar') }>button (TODO)</a></div>
        <div className={classes.footerTM}>Web Development 2023</div>
      </div>
    
    </div>

    );
  }
}

export default Layout;
