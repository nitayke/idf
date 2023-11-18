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
          {level ? "חידון " + level : "בחר/י קטגורית סמלים:"}
        </h5>
        {level ?
          <button className="back__button"
          onClick={() => setLevel("")}>
              חזור</button>
          :
          null
        }
        <hr />
        {level ? 
          null
          :
          <p className="creators">
            יוצרים: אייל הלמון, איתי נדלר ונתאי קסנר
          </p>
        }
      </header>

      {level ? (
        <Quiz level={level} setLevel={setLevel}></Quiz>
      ) : (
        <>
          <LevelSelector onSelect={(l) => setLevel(l)}></LevelSelector>
        </>
      )}
    </>
  );
}
