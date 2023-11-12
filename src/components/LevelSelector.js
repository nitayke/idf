const levels = { "קל": "easy", "בינוני": "normal", "חיל האוויר": "air", "חיל הים": "navy", "סיכות (סיירות)": "pins", "כל הסמלים": "all" };

export default function LevelSelector({ onSelect }) {
    return (
        <div className="grid grid-cols-3 h-screen">
            {Object.keys(levels).map((title, index) => (
                <button key={index} className="w-full" onClick={() => onSelect(levels[title])}>
                    {title}
                </button>
            ))}
        </div>
    )
}