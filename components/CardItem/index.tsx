import React from "react";
import styles from "./index.module.css";

const CardItem: React.FC<{ text: string; active: boolean, onClick: (text: string) => void }> = ({
  text,
    active,
  onClick
}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: active ? "#7A5FFF" : "#FFFFFF" }}
      onClick={() => onClick(text)}
    >
      <p style={{ color: active ? "#FFFFFF" : "#000000" }}>{text}</p>
    </div>
  );
};

export default CardItem;
