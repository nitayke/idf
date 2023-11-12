function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

async function getQuestions(level) {
    const url = `https://raw.githubusercontent.com/nitayke/idf/master/public/csv/${level}.csv`;
    const res = await fetch(url);
    const text = await res.text();
    const questionsArr = text.split(", ");
    shuffleArray(questionsArr);
    let questions = [];
    for (let i = 0; i < 8; i++) {
        let question = [questionsArr[i]];
        let tmp = [...questionsArr];
        tmp.splice(i, 1);
        shuffleArray(tmp);
        for (let j = 0; j < 3; j++) {
            question.push(tmp[j]);
        }
        questions.push(question);
    }
    return questions;
}

export { getQuestions };