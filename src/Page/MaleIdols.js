import React, { useState, useEffect } from "react";
import classes from "./MaleIdols.module.css";
import MaleIdolsData from "../Data/MaleIdolsData";

const MaleIdols = () => {
  const [idols, setIdols] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    MaleIdolsData.sort(() => Math.random() - 0.5);
    setIdols(MaleIdolsData);
    setDisplays([MaleIdolsData[0], MaleIdolsData[1]]);
  }, []);

  const clickHandler = (idol) => () => {
    if (idols.length <= 2) {
      if (winners.length === 0) {
        setDisplays([idol]);
      } else {
        let updatedIdol = [...winners, idol];
        setIdols(updatedIdol);
        setDisplays([updatedIdol[0], updatedIdol[1]]);
        setWinners([]);
      }
    } else if (idols.length > 2) {
      setWinners([...winners, idol]);
      setDisplays([idols[2], idols[3]]);
      setIdols(idols.slice(2));
    }
  };

  return (
    <div className={classes.body}>
      <h1 className={classes.title}>Who is your type?</h1>
      <a href="/" className={classes.goBackBtn}>
        Go back
      </a>
      {displays.map((e) => (
        <div className={classes.flex1} key={e.name}>
          <img
            src={e.image}
            onClick={clickHandler(e)}
            className={classes.idolImage}
          ></img>
          <div className={classes.name}>
            {e.name} ({e.occupation})
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaleIdols;
