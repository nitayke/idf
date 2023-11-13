export default function Loader({ text }) {
    return <>
        <div className="loader-container">
            <div className="loader-circle"></div>
            <div className="loader-line">
                <div className="loader-clock"></div>
            </div>
            <div className="loader-text">{text}</div>
        </div>
    </>;
}