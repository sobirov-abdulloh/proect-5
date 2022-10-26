import React, { useState } from "react";
import "./Button.css"
function Button({ answer, getAnswerBtn, rightAnswer }) {
  const [bgColor, setBgColor] = useState("");
  const [disabledBtn, setDisabled] = useState(false);
  const getAnswer = () => {
    getAnswerBtn(answer);
    if (answer === rightAnswer) {
      setBgColor("green");
      setDisabled(true);
    } else setBgColor("red");
  };
  return (
    <button
      className=""
      disabled={disabledBtn}
      style={{ backgroundColor: bgColor }}
      onClick={getAnswer}
    >
      {answer}
    </button>
  );
}

export default Button;
