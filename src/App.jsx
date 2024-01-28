import { useState } from "react";
import Header from "./components/Header";
import { saveAs } from 'file-saver';
import "./app.css";

function App() {
  const [xPos, setXpos] = useState("");
  const [yPos, setYpos] = useState("");
  const [row, setRow] = useState("");
  const [col, setCol] = useState("");

  // text area value
  const [textareaValue, setTextareaValue] = useState('');

  const calculateCord = (e) => {
    setXpos(`X: ${e.clientX}`);
    setYpos(`Y: ${e.clientY}`);
  };

  const calculateRowCol = (e) => {
    let content = e.target.value;
    let createPos = e.target.selectionStart;

    setTextareaValue(e.target.value);

    let lineNumber =
      (content.substring(0, createPos).match(/\n/g) || []).length + 1;
    let columnNumber = createPos - content.lastIndexOf("\n", createPos - 1);

    setRow(`Ln: ${lineNumber}`);
    setCol(`Col: ${columnNumber}`);
  };

// file system
 

  const saveToFile = () => {
    const blob = new Blob([textareaValue], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'Untitled.txt');
  };

  return (
    <>
      <section>
        <Header save={saveToFile}/>
        <div className="text-area-container">
          <textarea
            name="textarea"
            id="textarea"
            cols="10"
            rows="10"
            onMouseMove={calculateCord}
            onInput={calculateRowCol}
          ></textarea>
        </div>
        <footer>
          <div className="pos-info">
            <div className="mouse-pos">
              <p>
                <span id="x-pos">{xPos} </span> | <span id="y-pos">{yPos}</span>
              </p>
            </div>
            <div className="line-col">
              <p>
                <span id="linenum">{row}</span> | <span id="colnum">{col}</span>
              </p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
