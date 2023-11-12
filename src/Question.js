function Question({ question, options, onAnswerSelected }) {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/images/' + question} alt={question} className="w-64 h-64" />
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onAnswerSelected(option.isCorrect)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    {option.text}
                </button>
            ))}
        </div>
    );
}

export default Question;
