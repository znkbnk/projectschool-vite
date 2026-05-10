const solutionCode1 = `
//App.js

import React from "react";
import FileUploadComponent from "./FileUploadComponent";
import './styles.css'

const App = () => {
  return (
    <div>
      <FileUploadComponent />
    </div>
  );
};

export default App;

`;

const solutionCode2 = `
//FileUploadComponent.js

import React, { useRef, useState } from "react";

const FileUploadComponent = () => {
  const fileInputRef = useRef(null);
  const [filesData, setFilesData] = useState([]);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = () => {
    const files = Array.from(fileInputRef.current.files);
    const updatedFilesData = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));

    setFilesData((prevFilesData) => [...prevFilesData, ...updatedFilesData]);
  };

  const handleFileDelete = (index) => {
    setFilesData((prevFilesData) =>
      prevFilesData.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="file-upload">
      <h1>Upload Your Files</h1>
      <input
        className="file-upload__input"
        type="file"
        name="myFile[]"
        id="myFile"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button className="file-upload__button" type="button" onClick={handleButtonClick}>
        Choose File(s)
      </button>
      <div className="file-upload__label">
        {filesData.length > 0
          ? filesData.map((file, index) => (
              <div key={index} className="file-upload__item">
                {file.name}
              
              </div>
            ))
          : "No file(s) selected"}
      </div>
      <div className="file-upload__downloads">
        {filesData.length > 0 &&
          filesData.map((file, index) => (
            <div key={index} className="file-upload__download-item">
              <a href={file.url} download={file.name}>
                Download {file.name}
              </a>
              <button
                className="file-upload__delete"
                onClick={() => handleFileDelete(index)}
              >
                x
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FileUploadComponent;

`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2];
