import React, { Component } from "react";
import TypingText from "../components/TypingText";
import classes from '../style/page.module.css';
import About from "../components/About";
import Contact from "../components/Contact";

export default class Home extends Component {
  render() {
    return (
      <div className={classes.page}>
        <div className={classes.context}>
            <div className={classes.container}>
              <div className={classes.elContainer}>
                <div>
                  <h1>Home</h1>
                  <p>This designer works!</p>
                </div>
                <About/>
                <Contact/>
              </div>

              
              
              <div className={classes.finalContainer}>
                <div className={classes.textContainer}><TypingText /></div>
              </div>
            </div>
        </div>

      </div>
        
    
    );
  }
}