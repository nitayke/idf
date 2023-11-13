import { useEffect, useState } from 'react';
import Question from './Question';
import { getQuestions } from '../util/fetchData';
import Loader from './Loader';
import EndGame from './EndGame';

export default function Quiz({ level }) {
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
        <div className='content-container'>
            {showScore ? <EndGame score={score}></EndGame> :
                <Question
                    options={questions[currentQuestionIndex]}
                    onAnswerSelected={handleAnswerSelected}
                />
            }
        </div>
    );
}