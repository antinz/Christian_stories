import classes from "./Description.module.css";
import { acticleDescription } from "../../articles";
const Description = () => {
  return (
    <>
      {acticleDescription.map((item) => {
        const { id, text, type, year } = item;
        return (
          <div key={id} className={classes.description}>
            <p>{text}</p>
            <span>{type}</span>
            <span>{year}</span>
          </div>
        );
      })}
    </>
  );
};

export default Description;
