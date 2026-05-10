const solutionCode1 = `
// App.js

import React, { useState } from "react";
import JSZip from "jszip";
import "./styles.css";

function App() {
  const [zipFile, setZipFile] = useState(null);
  const [extractedFiles, setExtractedFiles] = useState([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [fileName, setFileName] = useState(
    "Please throw some .zip file to me!"
  );

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setZipFile(file);
      setFileName(file.name);
      setExtractedFiles([]);
      console.log("File uploaded:", file.name);
    }
  };

  const handleExtract = async () => {
    console.log("Extract button clicked");
    if (!zipFile) {
      console.log("No file uploaded");
      return;
    }

    setIsExtracting(true);
    const zip = new JSZip();

    try {
      const zipContents = await zip.loadAsync(zipFile);
      console.log("Zip contents loaded:", zipContents);

      const files = [];

      zipContents.forEach((relativePath, zipEntry) => {
        if (!zipEntry.dir) {
          const promise = zipEntry.async("blob").then((fileData) => {
            console.log("File extracted:", zipEntry.name, fileData);

            const isImage =
              fileData.type.startsWith("image/") ||
              /\\.(webp|jpg|jpeg|png|gif|bmp)$/i.test(zipEntry.name);

            if (isImage) {
              const fileURL = URL.createObjectURL(fileData);
              return { name: zipEntry.name, url: fileURL };
            }
            return null;
          });
          files.push(promise);
        }
      });

      const extractedImages = await Promise.all(files);
      console.log("Extracted images:", extractedImages);
      setExtractedFiles(extractedImages.filter((file) => file !== null));
    } catch (error) {
      console.error("Error processing .zip file:", error);
    } finally {
      setIsExtracting(false);
    }
  };

  const handleEnlarge = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(null);
  };

  return (
    <div className='app-container'>
      <h1>Zip File Image Extractor</h1>

      <div className='upload-section'>
        <div className='file-input-container'>
          <label className='file-input-label'>{fileName}</label>
          <input type='file' accept='.zip' onChange={handleFileUpload} />
        </div>

        <button
          className='extract-btn'
          onClick={handleExtract}
          disabled={!zipFile || isExtracting}
        >
          {isExtracting ? "Extracting..." : "Extract Images"}
        </button>

        {isExtracting && <div className='loading-spinner'></div>}
      </div>

      {extractedFiles.length > 0 && (
        <div className='gallery-container'>
          <h2>Extracted Images</h2>
          <div className='image-grid'>
            {extractedFiles.map((file, index) => (
              <div key={index} className='image-card'>
                <img src={file.url} alt={file.name} />
                <div className='enlarge-btn-container'>
                  <button
                    className='enlarge-btn'
                    onClick={() => handleEnlarge(file)}
                  >
                    Enlarge
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enlarged image modal */}
      {enlargedImage && (
        <div className='modal-overlay' onClick={handleCloseEnlarged}>
          <button className='modal-close' onClick={handleCloseEnlarged}>
            ×
          </button>
          <img
            className='modal-content'
            src={enlargedImage.url}
            alt={enlargedImage.name}
          />
        </div>
      )}
    </div>
  );
}

export default App;
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default [
  solutionCode1,
  
];
