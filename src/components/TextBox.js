import React, {useState} from 'react';
import './TextBox.css';


function TextBox(props) {

    const [text, setText] = useState("Replace me with your text");

    const handleUpClick = () =>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleClearClick = () =>{
        setText("");
    }
  return    <div className="App">
             <br/>
            <h1 className="head">{props.heading}</h1>
                    <form>
                        <div className="form-group">
                    <br/>
                        <textarea className="form-control w-75" id="myBox" value={text}  onChange={handleOnChange}  rows="8"></textarea>
                         </div>
                            <div className="buttons">
                            <button type="button" className="btn btn-dark mx-5" onClick={handleUpClick}>Convert to Uppercase</button>     
                            <button type="button" className="btn btn-dark " onClick={handleClearClick}>Clear</button>
                            <button type="button" className="btn btn-dark mx-5 " onClick={handleLoClick}>Convert to Lowercase</button>  
                         </div>
                    </form>

                    <div className="container my-3 mx-5">
                    <br/>
                     <h1>Text Summary</h1>
                     <p>{text.split(" ").length} words and {text.length} characters</p>
                     <p2>Read in { 0.008 * text.split(" ").length } minutes</p2>
                    </div>
            </div>
}

export default TextBox;
