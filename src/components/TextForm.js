import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to UpperCase", "success");
    }
    const handleLowclick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert(" Converted to LowerCase", "success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert(" Text has been reomoved", "success");

    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1> {props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpclick}>convert to uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowclick}>convert to lowecase</button>
                <button className="btn btn-primary" onClick={handleClearText}>
                    clear texrt
                </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>your text summary</h2>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}  Minutes read</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
