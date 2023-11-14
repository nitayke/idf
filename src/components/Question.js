import { useState } from "react";
import { shuffleArray } from "../util/fetchData";
import Loader from "./Loader";

export default function Question({ options, onAnswerSelected }) {
    const [isLoading, setLoading] = useState(true);
    let shuffledOptions = [...options];
    shuffleArray(shuffledOptions);
    return <>
        {isLoading ?
            <Loader text="טוען תמונה..."></Loader> : null
        }
        <div className="game" style={{ display: isLoading ? "none" : "flex" }}>
            <img
                onLoad={() => setLoading(false)}
                src={"https://raw.githubusercontent.com/nitayke/idf/master/public/images/" + options[0].replace(/"/g, "") + ".png"}
            />
            {shuffledOptions.map((option, index) => (
                <button
                    className="answer__btn"
                    key={index}
                    onClick={() => { onAnswerSelected(option); setLoading(true); }}
                >
                    {option}
                </button>
            ))}
        </div>
    </>;
}