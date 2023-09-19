import authorImage from "../../assets/author.jpg";
import classes from "./AboutAuthor.module.css";
import { aboutAuthor } from "../../articles";

const AboutAuthor = ({ showAboutAuthor, onExitClick }) => {
  if (!showAboutAuthor) {
    return null;
  }
  return (
    <div className={classes["about-author"]}>
      <div className={classes["about-author__center"]}>
        <div className={classes["about-author__image"]}>
          <img src={authorImage} alt="Author Image" />
        </div>
        <div className={classes["about-author-desc"]}>
          {aboutAuthor.map((about) => {
            const { title, content } = about;
            return (
              <>
                <h1>{title}</h1>
                {content.map((paragraph, index) => {
                  return <p key={index}>{paragraph}</p>;
                })}
              </>
            );
          })}
        </div>
      </div>
      <div className={classes["about-author-btn"]}>
        <button onClick={onExitClick}>Назад</button>
      </div>
    </div>
  );
};

export default AboutAuthor;
