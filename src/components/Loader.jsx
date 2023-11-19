export default function Loader({ text }) {
  return (
    <>
      <div className="loader-container">
        <div className="loader"></div>
        <div className="loader__text">{text}</div>
      </div>
    </>
  );
}
