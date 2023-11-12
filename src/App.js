import { useState } from "react";
import Quiz from "./components/Quiz";
import LevelSelector from "./components/LevelSelector";

function App() {
  const [level, setLevel] = useState("");

  return (
    <div>
      <h1>
        Logo Quiz
      </h1>
      {level ?
        <Quiz level={level}></Quiz> :
        <LevelSelector onSelect={(l) => setLevel(l)}></LevelSelector>
      }
    </div>
  );
}

export default App;
