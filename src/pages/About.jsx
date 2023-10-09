import React, { Component } from "react";
import classes from '../style/page.module.css'


export default class About extends Component {
  render() {
    return (
        <div className={classes.context}>
            <h1>About</h1>
            <p>This designer works!</p>

            
              <div className={classes.text}>
                text text text text text text text text text text text text text text text text text text text text text
                text text text text text text text text text text text text text text text text text text text text text{' '}
              </div>
              <div className={classes.rectangle1}></div>
        </div>
    
    );
  }
}