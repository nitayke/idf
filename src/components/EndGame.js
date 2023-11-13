export default function EndGame({ score }) {
    return <div className="after-game">
        <h3>הניקוד שלך: {score}/8</h3>
        <div>
            <p>אהבת?</p>
            <button id="share-btn">שתף לחבריך</button>
        </div>
    </div>;
}