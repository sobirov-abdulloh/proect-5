import React from "react";
import Button from "../Button/Button";

function Test({ id, question, answers, rightAnswer }) {
  console.log(answers);

  const getAnswerBtn = (answer) => {
    console.log(rightAnswer);
  };
  return (
    <div>
      <h2>
        {id}) {question}
      </h2>
      {answers.map((answer, index) => (
        <Button
        
          key={index}
          answer={answer}
          rightAnswer={rightAnswer}
          getAnswerBtn={getAnswerBtn}
        />
      ))}
    </div>
  );
}

export default Test;
