function Question({ options, onAnswerSelected }) {
    if (!options || options.length < 4) {
        return <h1>not good</h1>
    }
    return (
        <div>
            <img src={"https://raw.githubusercontent.com/nitayke/idf/master/public/images/" + options[0].replace('"', "") + ".png"} />
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => onAnswerSelected(option)}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    {option}
                </button>
            ))}
        </div>
    );
}

export default Question;
