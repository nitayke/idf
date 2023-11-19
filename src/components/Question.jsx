import { useState } from "react";
import { shuffleArray } from "../util/fetchData";

export default function Question({
  options,
  onAnswerSelected,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  myIndex,
  isCorrect,
  loaded,
  setLoaded,
}) {
  const [didAnswer, setDidAnswer] = useState(false);
  let shuffledOptions = [...options];
  shuffleArray(shuffledOptions);

  return (
    <>
      <div
        className="game"
        style={{
          display: loaded && myIndex === currentQuestionIndex ? "flex" : "none",
        }}
      >
        <img
          onLoad={() => {
            setLoaded(true);
          }}
          className="logo"
          src={
            "https://raw.githubusercontent.com/nitayke/idf/master/public/images/" +
            options[0].replace(/"/g, "") +
            ".png"
          }
        />
        <div className="answers">
          {didAnswer ? (
            <button
              style={{ gridColumn: "span 2" }}
              className="answer"
              onClick={() => {
                setDidAnswer(false);
                setCurrentQuestionIndex(() => currentQuestionIndex + 1);
              }}
            >
              {isCorrect ? "צדקת!" : "טעית!"} לחץ לשאלה הבאה
            </button>
          ) : (
            <>
              {shuffledOptions.map((option, index) => (
                <button
                  className="answer"
                  key={index}
                  onClick={() => {
                    setDidAnswer(true);
                    onAnswerSelected(option);
                  }}
                >
                  {option}
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
