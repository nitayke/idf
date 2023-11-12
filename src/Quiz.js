import { useState } from 'react';
import Question from './Question';

function Quiz({ questions }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerSelected = (isCorrect) => {
        if (isCorrect) {
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
                    question={questions[currentQuestionIndex]}
                    options={questions[currentQuestionIndex].options}
                    onAnswerSelected={handleAnswerSelected}
                />
            )}
        </div>
    );
}

export default Quiz;
