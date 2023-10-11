import React, { Component } from "react";
import classes from '../../style/list.module.css';

export default class ElementList extends Component {
  render() {
    const { name } = this.props;
    return (
      <li className={classes.item} draggable="true">
        <div className={classes.details}>
          <img src="images/img-1.jpg" alt="Image" />
          <span>{name}</span>
        </div>
        <i className="uil uil-draggable-dots"></i>
      </li>
    );
  }
}
