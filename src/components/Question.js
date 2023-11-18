import { useState } from "react";
import { shuffleArray } from "../util/fetchData";
// import Loader from "./Loader";

export default function Question({ options, onAnswerSelected, currentQuestionIndex, myIndex }) {
    // const [isLoading, setLoading] = useState(true);
    let shuffledOptions = [...options];
    shuffleArray(shuffledOptions);
    return (
        <>
            {/* {isLoading ?
                <Loader text="טוען תמונה..."></Loader> : null
            } */}
            <div className="game" style={{ display: myIndex == currentQuestionIndex ? "flex" : "none" }}>
                <img
                    className="logo"
                    src={"https://raw.githubusercontent.com/nitayke/idf/master/public/images/" + options[0].replace(/"/g, "") + ".png"}
                />
                <div className="answers">
                    {shuffledOptions.map((option, index) => (
                        <button
                            className="answer"
                            key={index}
                            onClick={() => { onAnswerSelected(option)}}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}