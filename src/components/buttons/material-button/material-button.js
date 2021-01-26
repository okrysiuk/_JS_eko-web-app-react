import React from "react";
import "./material-button.css";

const MaterialButton = ({ children, onClick, myStyle }) => {
  const styles = ["btn-mat"];
  styles.push(myStyle);
  return (
    <button className={styles.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default MaterialButton;
