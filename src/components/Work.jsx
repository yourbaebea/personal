import React, { Component } from "react";
import classes from '../style/page.module.css'
import List from "./dragList/List";


export default class Work extends Component {
  render() {
    return (
        <div className={classes.elContainer}>
            <h1>Work</h1>
            <p>This designer works!</p>
            {/*<List/>*/}
            
        </div>
    
    );
  }
}