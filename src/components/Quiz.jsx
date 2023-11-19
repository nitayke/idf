import { useEffect, useState } from "react";
import Question from "./Question";
import { getQuestions } from "../util/fetchData";
import Loader from "./Loader";
import EndGame from "./EndGame";

export default function Quiz({ level, setLevel }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    (async function () {
      setQuestions(await getQuestions(level));
    })();
  }, []);

  const handleAnswerSelected = (option) => {
    if (option === questions[currentQuestionIndex][0]) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex >= questions.length) {
      setShowScore(true);
    }
  };
  return questions.length ? (
    <>
      {loaded ? null : <Loader text={"טוען תמונה..."}></Loader>}

      <div className="game" style={{ display: loaded ? "flex" : "none" }}>
        {showScore ? (
          <EndGame score={score} setLevel={setLevel} level={level}></EndGame>
        ) : (
          <>
            <div className="game--data">
              <p>שאלה {currentQuestionIndex + 1} מתוך 14</p>
              <p>הניקוד שלך בינתיים: {score}</p>
            </div>
            {questions.map((question, index) => (
              <Question
                isCorrect={isCorrect}
                myIndex={index}
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                options={question}
                onAnswerSelected={handleAnswerSelected}
                loaded={loaded}
                setLoaded={setLoaded}
              />
            ))}
          </>
        )}
      </div>
    </>
  ) : (
    <Loader text={"טוען נתונים..."}></Loader>
  );
}
