import { useState } from "react";
import { shuffleArray } from "../util/fetchData";

export default function Question({ options, onAnswerSelected }) {
    const [isLoading, setLoading] = useState(true);
    let shuffledOptions = [...options];
    shuffleArray(shuffledOptions);
    return <>
        {isLoading ?
            <h1>טוען תמונה...</h1> : null
        }
        <div style={{ display: isLoading ? "none" : "block" }}>
            <img
                onLoad={() => setLoading(false)}
                src={"https://raw.githubusercontent.com/nitayke/idf/master/public/images/" + options[0].replace(/"/g, "") + ".png"}
            />
            {shuffledOptions.map((option, index) => (
                <button
                    key={index}
                    onClick={() => { onAnswerSelected(option); setLoading(true); }}
                >
                    {option}
                </button>
            ))}
        </div>
    </>;
}