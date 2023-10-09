import React, { Component } from "react";
//import style from "../style/navbar.module.css";
import styles from "../style/page.module.css"
import classes from '../style/layout.module.css'

class Layout extends Component {
  render() {
    const { page } = this.props;

    return (
      <div>
      <div className={classes.container}>
      <div className={classes.nav}>
      <div className={classes.navBar}>
        <div className={classes.navHome}><a href='/'>Home</a></div>
        <div className={classes.navOptions}>
          <div className={classes.navigation}><a href='/about'>About</a></div>
          <div className={classes.navigation}><a href='/contact'>Contact</a></div>
        </div>
      </div>
      </div>
      <div className={classes.page}>{page}</div>



      
    </div>
    <div className={classes.footer}></div>
    </div>

    );
  }
}

export default Layout;
