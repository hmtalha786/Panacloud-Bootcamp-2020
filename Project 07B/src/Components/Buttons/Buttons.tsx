import React from "react";
import "./Buttons.css";

type buttonType = {
  title: string;
  onPress: () => void;
  disable: boolean;
};
const Buttons: React.FC<buttonType> = ({ title, onPress, disable }) => {
  return (
    <button disabled={disable} className="actionBtn" onClick={onPress}>
      {title}
    </button>
  );
};

export default Buttons;
