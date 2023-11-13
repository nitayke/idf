const levels = ["קל", "בינוני", "חיל האוויר", "חיל הים", "סיכות (סיירות)", "כל הסמלים"];

export default function LevelSelector({ onSelect }) {
    return (
        <div className="content-container">
            <h2>בחרו את סוג החידון</h2>
            <div className="levels-btns">
                {levels.map((title, index) => (
                    <button className="choose-level-btn" key={index} onClick={() => onSelect(title)} ></button>
                ))}
            </div>
        </div>
    )
}