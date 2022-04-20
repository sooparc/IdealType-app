import React, { useState } from "react";
import classes from "./Home.module.css";

const Home = () => {
  const [showMaleRound, setShowMaleRound] = useState(false);
  const [showFemaleRound, setShowFemaleRound] = useState(false);

  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const onClickBtn1 = () => {
    setShowMaleRound((showMaleRound) => !showMaleRound);
    setBtn2(true);
  };

  const onClickBtn2 = () => {
    setShowFemaleRound((showFemaleRound) => !showFemaleRound);
    setBtn1(true);
  };

  return (
    <>
      <div className={classes.body}>
        <div className={classes.title}>K-POP Stars Ideal Type World Cup</div>

        <div style={{ textAlign: "center", position: "relative", top: "32%" }}>
          <button
            type="button"
            onClick={onClickBtn1}
            className={classes.button}
            disabled={btn1}
          >
            Male Idols
          </button>
          <button
            type="button"
            onClick={onClickBtn2}
            className={classes.button}
            disabled={btn2}
          >
            Female Idols
          </button>
        </div>
        {showMaleRound === true ? (
          <div
            style={{ textAlign: "center", position: "relative", top: "32%" }}
          >
            <a href="/maleidols" className={classes.malelink}>
              Tournament mode
            </a>
            <a href="/malefastmode" className={classes.malelink}>
              By preference mode
            </a>
          </div>
        ) : null}

        {showFemaleRound === true ? (
          <div
            style={{ textAlign: "center", position: "relative", top: "32%" }}
          >
            <a href="/femaleidols" className={classes.femalelink}>
              Tournament mode
            </a>
            <a href="/femalefastmode" className={classes.femalelink}>
              By preference mode
            </a>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
