import classes from "./ContainerWrapper.module.css";

const ContainerWrapper = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default ContainerWrapper;
