import Cover from "./Cover";
import Description from "./Description";
import classes from "./MainContent.module.css";
import { article } from "../../articles";

const MainContent = () => {
  return (
    <article className={classes.article}>
      <Cover />
      <Description />
    </article>
  );
};

export default MainContent;
