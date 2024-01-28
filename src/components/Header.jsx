import React, { useRef } from "react";

const Header = (props) => {
  function handleFileChange(event) {
    const file = event.target.files[0];

    if (file) {
      props.readFile(file);
    }
  }
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">File</a>
            <ul className="inner-list">
              <li>
                <a href="/">New</a>
              </li>
              <li>
                <a
                  href="http://localhost:5173/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New window
                </a>
              </li>

              <li>
                <a href="#" onClick={props.openNFile}>
                  Open
                </a>
              </li>
              <input
                type="file"
                ref={props.fileref}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <li>
                <a href="#" onClick={props.save}>
                  Save
                </a>
              </li>
              <li>
                <a href="#">Save File</a>
              </li>
              <hr />
              <li>
                <a href="#">Print</a>
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
  );
};

export default Header;
