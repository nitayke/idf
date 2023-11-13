import { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import LevelSelector from "./components/LevelSelector";
import useBackButton from "./hooks/BackButton";

export const QUESTIONS_COUNT = 14;

export default function App() {
  const [level, setLevel] = useState("");
  useBackButton(setLevel);

  return (
    <div>
      <h1>חידון סמלי צה"ל הגדול {level ? "(" + level + ")" : null}</h1>
      {
        level ?
          <Quiz level={level} ></Quiz> :
          <LevelSelector onSelect={(l) => setLevel(l)}></LevelSelector>
      }
      <footer>שבושון</footer>
    </div>
  );
}