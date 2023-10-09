import React, { Component } from "react";
import TypingText from "../components/TypingText";
import style from "../style/typing.module.css"
import classes from '../style/page.module.css'

export default class Home extends Component {
  render() {
    return (
      <div className={classes.page}>
        <div className={classes.context}>




            <div className={classes.container}>
              <div className={classes.elContainer}>
                <h1>Home</h1>
                <p>This designer works!</p>
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