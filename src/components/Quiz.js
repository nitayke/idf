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
    const [isCorrect, setIsCorrect] = useState(false);

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
            setIsCorrect(true);
            setScore(score + 1);
        } else {
            setIsCorrect(false);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex >= questions.length) {
            setShowScore(true);
        }
    };
    return (
        <div className="game">
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
                                isCorrect={isCorrect}
                                myIndex={index}
                                currentQuestionIndex={currentQuestionIndex}
                                setCurrentQuestionIndex={setCurrentQuestionIndex}
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