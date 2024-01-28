import { useState } from "react";
import "./app.css";
function App() {
  const [xPos, setXpos] = useState("");
  const [yPos, setYpos] = useState("");
  const [row, setRow] = useState("");
  const [col, setCol] = useState("");

  const calculateCord = (e) => {
    setXpos(`X: ${e.clientX}`);
    setYpos(`Y: ${e.clientY}`);
  };

  const calculateRowCol = (e) => {
    let content = e.target.value;
    let createPos = e.target.selectionStart;

    let lineNumber =
      (content.substring(0, createPos).match(/\n/g) || []).length + 1;
    let columnNumber = createPos - content.lastIndexOf("\n", createPos - 1);

    setRow(`Ln: ${lineNumber}`);
    setCol(`Col: ${columnNumber}`);
  };

  return (
    <>
      <section>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">File</a>
                <ul className="inner-list">
                  <li>
                    <a href="#">New</a>
                  </li>
                  <li>
                    <a href="#">Open</a>
                  </li>
                  <li>
                    <a href="/saveFile">Save</a>
                  </li>
                  <li>
                    <a href="#">Exit</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Edit</a>
                <ul className="inner-list">
                  <li>
                    <a href="#">Cut</a>
                  </li>
                  <li>
                    <a href="#">Copy</a>
                  </li>
                  <li>
                    <a href="#">Pest</a>
                  </li>
                  <li>
                    <a href="#">Delete</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </nav>
          <div className="setting">
            <span>
              <i className="fa-solid fa-gear"></i>
            </span>
            {/* <span className="dark-mode" id="dark-lite">
            <i className="fa-regular fa-moon moon"></i>
            <i className="fa-solid fa-sun sun"></i>
          </span>  */}
          </div>
        </header>
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
