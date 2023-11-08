import React, {Component} from "react";
import { ReactSortable } from "react-sortablejs";
import classes from '../style/page.module.css'

export default class Work extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allOptions:[ 
        {value: "yes", id: "postgreSQL", name: "postgreSQL" },
        {value: "yes", id: "React", name: "React" },
        {value: "no", id: "Angular", name: "Angular" },
        {value: "yes", id: "Java", name: "Java" },
        {value: "yes", id: "C/C++", name: "C/C++" },
        {value: "no", id: "Ruby", name: "Ruby" },
        {value: "yes", id: "Python", name: "Python" },
        {value: "yes", id: "Kotlin", name: "fiona" },
        {value: "no", id: "PHP", name: "PHP" },
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
  <p>These are some of the tools/languages most used nowadays, i have experience with some, get to sorting!</p>

  <div className={classes.listContainer}>
    <div className={classes.list}>
      <div className={classes.listTitle}>All Options</div>
      <ReactSortable className={classes.listElements} group="groupName" list={allOptions} setList={(newList) => this.setState({ allOptions: newList })}>
        {allOptions.map((item) => (
          <divaction className={classes.listEl} key={item.id}>{item.name}</divaction>
        ))}
      </ReactSortable>
    </div>

    <div className={classes.list}>
      <div className={classes.listTitle}>I'm an experienced programmer in ...</div>
      <ReactSortable className={classes.listElements} group="groupName" list={yesList} setList={(newList) => this.setState({ yesList: newList })}>
        {yesList.map((item) => (
          <divaction className={`${classes.listEl} ${item.value === 'yes' ? classes.greenText : classes.redText}`}
          key={item.id}>{item.name}</divaction>
        ))}
      </ReactSortable>
    </div>

    <div className={classes.list}>
      <div className={classes.listTitle}>I haven't used it yet but I would be willing to try!</div>
      <ReactSortable className={classes.listElements} group="groupName" list={noList} setList={(newList) => this.setState({ noList: newList })}>
        {noList.map((item) => (
          <divaction className={`${classes.listEl} ${item.value === 'no' ? classes.greenText : classes.redText}`} key={item.id}>{item.name}</divaction>
        ))}
      </ReactSortable>
    </div>
  </div>
</div>

);}}