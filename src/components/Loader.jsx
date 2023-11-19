export default function Loader({ text }) {
  return (
    <>
      <div className="loader-container" style={{ direction: "rtl" }}>
        <div className="loader"></div>
        <div className="loader__text">{text}</div>
      </div>
    </>
  );
}
