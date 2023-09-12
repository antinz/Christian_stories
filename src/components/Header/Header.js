import SelectorForm from "./SelectorForm";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Your Small Books</h1>
      <SelectorForm />
    </header>
  );
};

export default Header;
