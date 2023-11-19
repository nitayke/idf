import { useEffect, useState } from "react";
import { shuffledArray } from "../util/fetchData";

export default function Question({
  options,
  onAnswerSelected,
  currentQuestionIndex,
  myIndex,
  nextQuestion,
  loaded,
  setLoaded,
}) {
  const [answered, setAnswered] = useState("");
  const [shuffledOptions, setShuffled] = useState([...options]);
  let correct = options[0];
  useEffect(() => {
    setShuffled(shuffledArray(shuffledOptions));
  }, []);

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
          {shuffledOptions.map((option, index) => (
            <button
              className={
                "answer " +
                (answered
                  ? correct === option
                    ? "green"
                    : answered === option
                    ? "red"
                    : ""
                  : "")
              }
              key={index}
              onClick={() => {
                if (answered) return;
                setAnswered(option);
                onAnswerSelected(option);
              }}
            >
              {option}
            </button>
          ))}
          {answered ? (
            <button className="back__button" onClick={nextQuestion}>
              לשאלה הבאה
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
