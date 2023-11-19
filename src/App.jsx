import { useState } from "react";
import Quiz from "./components/Quiz";
import LevelSelector from "./components/LevelSelector";

export const QUESTIONS_COUNT = 14;

export default function App() {
  const [level, setLevel] = useState("");

  return (
    <>
      <div className="jet"></div>
      <header className="header">
        <h3 className="title">חידון סמלי צה"ל הגדול</h3>
        <h5 className="subtitle">
          {level ? "חידון " + level : "בחר/י קטגוריית סמלים:"}
        </h5>
        {level ? (
          <button className="back__button" onClick={() => setLevel("")}>
            חזור
          </button>
        ) : null}
      </header>

      {level ? (
        <Quiz level={level} setLevel={setLevel}></Quiz>
      ) : (
        <>
          <LevelSelector onSelect={(l) => setLevel(l)}></LevelSelector>
          <div className="cont">
            <p className="creators">יוצרים: אייל הלמון, איתי נדלר ונתאי קסנר</p>
            <div className="creators">מונה כניסות:</div>
            <img
              className="counter"
              src="https://counter8.optistats.ovh/private/freecounterstat.php?c=5c2fsfr6ec2mkfc15xub5twwxtjer8u2"
            />
          </div>
        </>
      )}
    </>
  );
}
