const levels = { "קל": "easy", "בינוני": "normal", "חיל האוויר": "air", "חיל הים": "navy", "סיכות (סיירות)": "pins", "כל הסמלים": "all" };

export default function LevelSelector({ onSelect }) {
    return (
        <div className="content-container">
            <h2>בחרו את סוג החידון</h2>
            <div className="levels-btns">
                {Object.keys(levels).map((title, index) => (
                    <button className="choose-level-btn" key={index} onClick={() => onSelect(levels[title])} ></button>
                ))}
            </div>
        </div>
    )
}