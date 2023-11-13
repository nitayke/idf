export default function EndGame({ score }) {
    return <div className="after-game">
        <h3>הניקוד שלך: {score}/8</h3>
        <button>משחק חדש</button>
        <div>
            <p>אהבת?</p>
            <button>שתף לחבריך</button>
        </div>
    </div>;
}