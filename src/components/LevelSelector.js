const levels = ["קל", "בינוני", "חיל האוויר", "חיל הים", "סיכות (סיירות)", "כל הסמלים"];

export default function LevelSelector({ onSelect }) {
    return (
        <div className="content--container">
            <h2 className="content__title">בחרו את סוג החידון</h2>
            <div className="levels--btns">
                {levels.map((title, index) => (
                    <button className="choose__level__btn" key={index} onClick={() => onSelect(title)} ></button>
                ))}
            </div>
        </div>
    )
}