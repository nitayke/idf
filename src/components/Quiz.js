import { useEffect, useState } from 'react';
import Question from './Question';
import { getQuestions } from '../util/fetchData';

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
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            {showScore ? (
                <div className="text-2xl mb-4">
                    Your score: {score}
                </div>
            ) : (
                <Question
                    options={questions[currentQuestionIndex]}
                    onAnswerSelected={handleAnswerSelected}
                />
            )}
        </div>
    );
}