import { useState, useEffect } from "react";
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
      </header>

      {level ? (
        <Quiz level={level}></Quiz>
      ) : (
        <LevelSelector onSelect={(l) => setLevel(l)}></LevelSelector>
      )}
    </>
  );
}
