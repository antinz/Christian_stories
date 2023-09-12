import React from "react";
import classes from "./Cover.module.css";
import { articleCover } from "../../articles";

const Cover = () => {
  return (
    <>
      {articleCover.map((item) => {
        const { id, title, subtitle, author } = item;
        return (
          <div key={id} className={classes.cover}>
            <h4>{author}</h4>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
        );
      })}
    </>
  );
};

export default Cover;
