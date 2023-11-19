const levels = [
  "קל",
  "בינוני",
  "חיל האוויר",
  "חיל הים",
  "סיכות (סיירות)",
  "כל הסמלים",
];

export default function LevelSelector({ onSelect }) {
  return (
    <div className="levels">
      {levels.map((title, index) => (
        <button
          className="level"
          key={index}
          onClick={() => onSelect(title)}
          data-level={title}
        ></button>
      ))}
    </div>
  );
}
