import { useState } from "react";
import Quiz from "./components/Quiz";
import LevelSelector from "./components/LevelSelector";

export default function App() {
  const [level, setLevel] = useState("");

  return (
    <div className="p-4 bg-white rounded shadow font-heebo">
      <h1 className="text-2xl font-bold mb-4">
        סמלי צה"ל
      </h1>
      {level ?
        <Quiz level={level} ></Quiz> :
        <LevelSelector onSelect={(l) => setLevel(l)}></LevelSelector>
      }
    </div>
  );
}