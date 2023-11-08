import React, { Component , FC, useState} from "react";
import { ReactSortable } from "react-sortablejs";
import classes from '../style/page.module.css'
import List from "./dragList/List";



export default class Work extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allOptions:[ 
        { value: "yes", id: "shrek", name: "shrek" },
        {value: "yes", id: "fiona", name: "fiona" },
        { value: "no", id: "here", name: "here" }
      ],
      yesList: [],
      noList: [],
    };
  }


  render() {
    const { allOptions, yesList, noList } = this.state;


    return (
<div className={classes.elContainer}>
  <h1>Work</h1>
  <p>The are some of the tools most used nowadays, i have experience with some, get to sorting!</p>
  {/*<List/>*/}

  <div className={classes.listContainer}>
    <div className={classes.list}>
      <div className={classes.listTitle}>All Options</div>
      <ReactSortable className={classes.listElements} group="groupName" list={allOptions} setList={(newList) => this.setState({ allOptions: newList })}>
        {allOptions.map((item) => (
          <sort className={classes.listEl} key={item.id}>{item.name}</sort>
        ))}
      </ReactSortable>
    </div>

    <div className={classes.list}>
      <div className={classes.listTitle}>I'm an experienced programmer in ...</div>
      <ReactSortable className={classes.listElements} group="groupName" list={yesList} setList={(newList) => this.setState({ yesList: newList })}>
        {yesList.map((item) => (
          <sort className={`${classes.listEl} ${item.value === 'yes' ? classes.greenText : classes.redText}`}
          key={item.id}>{item.name}</sort>
        ))}
      </ReactSortable>
    </div>

    <div className={classes.list}>
      <div className={classes.listTitle}>I haven't used it yet but I would be willing to try!</div>
      <ReactSortable className={classes.listElements} group="groupName" list={noList} setList={(newList) => this.setState({ noList: newList })}>
        {noList.map((item) => (
          <sort className={`${classes.listEl} ${item.value === 'no' ? classes.greenText : classes.redText}`} key={item.id}>{item.name}</sort>
        ))}
      </ReactSortable>
    </div>
  </div>
</div>

            
        
    
    );
  }
}