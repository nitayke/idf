const levels = { "קל": "easy", "בינוני": "normal", "חיל האוויר": "air", "חיל הים": "navy", "סיכות (סיירות)": "pins", "כל הסמלים": "all" };

export default function LevelSelector({ onSelect }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.keys(levels).map((title, index) => (
                <button key={index} onClick={() => onSelect(levels[title])} className="bg-blue-500 text-white rounded text-xl" >
                    {title}
                </button>
            ))}
        </div>
    )
}