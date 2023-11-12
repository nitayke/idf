const levels = { "קל": "easy", "בינוני": "normal", "חיל האוויר": "air", "חיל הים": "navy", "סיכות (סיירות)": "pins", "כל הסמלים": "all" };

export default function LevelSelector({ onSelect }) {
    return (
        <div>
            {Object.keys(levels).map((title, index) => (
                <button key={index} onClick={() => onSelect(levels[title])} >
                    {title}
                </button>
            ))}
        </div>
    )
}