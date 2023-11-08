import React, { Component } from "react";
import classes from '../style/page.module.css';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hi my name is Ana Beatriz Marques and I'm a software engineering student at the University of Coimbra. While I may not be a designer, I want to express my creativity and do some cool designs (and maybe learn some new tricks). Here's a bit about me: I'm a book enthusiast, I love makeup, but the thing I enjoy most is being cozy in bed with a steaming cup of coffee indulging in old episodes of my favorite show. When I'm not buried in projects or exams, you might find me find me at the nearest thrift shop trying to find some cute outfits but if you don't, check out my contacts!",
      buttonColors: Array(112).fill("var(--secondary-text-color)"),
    };
  }

  handleButtonClick = (index) => {
    const { buttonColors } = this.state;
    const currentColor = buttonColors[index];

    const availableColors = [
      "var(--text-1)",
      "var(--text-2)",
      "var(--text-3)",
      "var(--text-4)",
      "var(--text-5)",
      "var(--text-6)"
    ];

    let newColor;

    do {
      newColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    } while (newColor === currentColor);

    const updatedColors = [...buttonColors];
    updatedColors[index] = newColor;

    this.setState({ buttonColors: updatedColors });
  };

  render() {
    const { text, buttonColors } = this.state;

    const words = text.split(' ');

    return (
      <div className={classes.elContainer}>
        <h1>About</h1>

        <div className={classes.textContainer}>
          {words.map((word, index) => (
            <a className={classes.textColor}
              key={index}
              style={{ color: buttonColors[index] }}
              onClick={() => this.handleButtonClick(index)}
            >
              {word}
            </a>
          ))}
        </div>

      </div>
    );
  }
}
