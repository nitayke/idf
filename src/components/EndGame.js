import { QUESTIONS_COUNT } from "../App";

export default function EndGame({ score }) {
    return(
        <div className="after--game">
            <div className="new--game">
                <h3 className="final__score">הניקוד שלך: {score}/{QUESTIONS_COUNT}</h3>
                <button className="new__game">משחק חדש</button>
            </div>
            <div className="share">
                <p>?אהבת</p>
                <button className="share__btn">שתף לחבריך</button>
            </div>
        </div>
    );
    
    
}