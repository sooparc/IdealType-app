import React, { useState, useEffect } from "react";
import classes from "./FemaleFastMode.module.css";
import array from "../Data/FemaleIdolsData";

const FemaleFastMode = () => {
  const [displays, setDisplays] = useState([]);
  const [filteredArr, setFilteredArr] = useState([]);

  useEffect(() => {
    let arr = array.sort(() => Math.random() - 0.5);
    setDisplays([arr[0], arr[1]]);
    setFilteredArr(arr);
  }, [setDisplays]);

  const clickHandler = (e) => () => {
    displays.forEach(function (v, i, d) {
      const tags = e.tags;
      let filtered = filteredArr.filter((e) => {
        const arrayTags = e.tags;
        return tags.some((f) => arrayTags.includes(f));
      });

      if (v.id === e.id) {
        if (filteredArr.length > 2) {
          setFilteredArr(filtered);

          filtered.push(filteredArr[i]);
          filtered.splice(i, 1);
          displays.filter((displays) => displays !== e);
          filtered.splice(d, 1);
          setDisplays([filtered[0], filtered[1]]);
        } else if (filteredArr.length <= 2) {
          setDisplays([filtered[i]]);
        }
      }
    });
  };

  return (
    <div className={classes.body}>
      <h1 className={classes.title}>Who is your type?</h1>
      <a href="/" className={classes.goBackBtn}>
        Go back
      </a>
      {displays.map((e, index) => (
        <div className={classes.flex1} key={e.name}>
          <img src={e.image} onClick={clickHandler(e)}></img>
          <div className={classes.name}>
            {e.name} ({e.occupation})
          </div>
        </div>
      ))}
    </div>
  );
};

export default FemaleFastMode;
