import './SecondInvalid.css'
function SecondInvalid({ onClosed }) {
    return (
        <div className="overlay">
            <div className="no">
                <div className="input">
                    <h1>Input Invalid!</h1>
                </div>
                <div className="con">
                    <p className="p">Please enter a valid age (More than 0)</p>
                    <button onClick={onClosed}>Okay</button>
                </div>
            </div>
        </div>
    )
}
export default SecondInvalid
