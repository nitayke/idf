import { QUESTIONS_COUNT } from "../App";

export default function EndGame({ score, setLevel, level }) {
  function share() {
    let txt = `קיבלתי ${score}/${QUESTIONS_COUNT} בחידון סמלי צה"ל בקטגוריה ${level}!%0A`;
    txt += "*כנסו לחידון:*%0A";
    txt += "https://nitayke.github.io/idf%0A";
    window.open("https://wa.me/?text=" + txt);
  }
  return (
    <div className="after--game">
      <div className="new--game">
        <h3 className="final__score">
          הניקוד שלך: {score}/{QUESTIONS_COUNT}
        </h3>
        <button className="new__game" onClick={() => setLevel("")}>
          משחק חדש
        </button>
      </div>
      <div className="share">
        <p>?אהבת</p>
        <button onClick={share} className="share__btn">
          שתף לחבריך
        </button>
      </div>
    </div>
  );
}
