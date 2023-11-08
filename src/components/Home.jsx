import React, { useState, useEffect } from "react";
import classes from "../style/page.module.css";

const Home = () => {
  const _CONTENT = [
    "probably should've taken more design classes.... this seems pretty empty",
    "click the heart to go back to the top of the page!",
    "the text is not very colorful but im feeling lazy. maybe you can do something about it?"
  ];

  let _PART = 0;
  let _PART_INDEX = 0;
  let _INTERVAL_VAL;

  const [text, setText] = useState("");

  useEffect(() => {
    function Type() {
      const currentText = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
      setText(currentText);
      _PART_INDEX++;

      if (currentText === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(() => {
          _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
      }
    }

    function Delete() {
      let currentText = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
      let openBracketIndex = currentText.lastIndexOf("[");
      let closeBracketIndex = currentText.lastIndexOf("]");

      if (openBracketIndex !== -1 && closeBracketIndex !== -1 && closeBracketIndex > openBracketIndex) {
        currentText = currentText.substring(0, openBracketIndex) + currentText.substring(closeBracketIndex + 1);
      }

      setText(currentText);
      _PART_INDEX--;

      if (currentText === "") {
        clearInterval(_INTERVAL_VAL);

        if (_PART === _CONTENT.length - 1) _PART = 0;
        else _PART++;

        _PART_INDEX = 0;

        setTimeout(() => {
          _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
      }
    }

    _INTERVAL_VAL = setInterval(Type, 100);

    return () => {
      clearInterval(_INTERVAL_VAL);
    };
  }, []);

  return (
    <div className={classes.elContainer}>

      <div className={classes.finalContainer}>
        <div className={classes.textContainer}>
          <div className={classes.text}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
