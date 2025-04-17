import React from "react";
import styles from "./index.module.css";

const CardItem: React.FC<{
  text: string;
  active: boolean;
  image: React.ReactNode;
  onClick: (text: string) => void;
}> = ({ text, active, onClick, image }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: active ? "#7A5FFF" : "#FFFFFF" }}
      onClick={() => onClick(text)}
    >
      {image}
      <p style={{ color: active ? "#FFFFFF" : "#000000" }}>{text}</p>
    </div>
  );
};

export default CardItem;
