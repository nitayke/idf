export default function Loader({ text }) {
    return <>
        <div className="loader--container">
            <div className="loader__circle"></div>
            <div className="loader__line">
                <div className="loader__clock"></div>
            </div>
            <div className="loader__text">{text}</div>
        </div>
    </>;
}