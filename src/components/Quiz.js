import { useEffect, useState } from 'react';
import Question from './Question';
import { getQuestions } from '../util/fetchData';
import Loader from './Loader';
import EndGame from './EndGame';

export default function Quiz({ level, setLevel }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        (async function () {
            setQuestions(await getQuestions(level));
        })();
    }, []);

    if (!questions.length) {
        return <Loader text="טוען נתונים..."></Loader>;
    }

    const handleAnswerSelected = (option) => {
        if (option === questions[currentQuestionIndex][0]) {
            setScore(score + 1);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className="game">
            {showScore ?
                null
                :
                <button className="back__button"
                onClick={() => setLevel("")}>
                    חזור</button>
            }
            {showScore ? 
                null
                :
                <div className="game--data">
                    <p>שאלה {currentQuestionIndex + 1} מתוך 14</p>
                    <p>הניקוד שלך בינתיים: {score}</p>
                </div>
            }
            {showScore ?
                <EndGame score={score} setLevel={setLevel}></EndGame>
                :
                <>
                    {questions.map((question, index) => {
                        return (
                            <Question
                                myIndex={index}
                                currentQuestionIndex={currentQuestionIndex}
                                options={question}
                                onAnswerSelected={handleAnswerSelected}
                            />
                        )
                    })}
                </>
            }
        </div>
    );
}