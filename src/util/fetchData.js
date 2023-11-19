import { QUESTIONS_COUNT } from "../App";

export function shuffledArray(array) {
    let copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

export async function getQuestions(level) {
    const url = `https://raw.githubusercontent.com/nitayke/idf/master/public/csv/${level}.csv`;
    const res = await fetch(url);
    const text = await res.text();
    let questionsArr = text.split(", ");
    questionsArr = shuffledArray(questionsArr);
    let questions = [];
    for (let i = 0; i < QUESTIONS_COUNT; i++) {
        let question = [questionsArr[i]];
        let tmp = [...questionsArr];
        tmp.splice(i, 1);
        tmp = shuffledArray(tmp);
        for (let j = 0; j < 3; j++) {
            question.push(tmp[j]);
        }
        questions.push(question);
    }
    return questions;
}