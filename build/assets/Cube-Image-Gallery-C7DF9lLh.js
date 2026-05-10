var e=[`
//App.js

import React from 'react';
import CubeGallery from './CubeGallery';
import './styles.css'


function App() {
  return (
    <div className="App">
      <CubeGallery />
    </div>
  );
}

export default App;

`,`
//CubeGallery.js

import React, { useState } from 'react';

const CubeGallery = () => {
  const [cubeImageClass, setCubeImageClass] = useState('show-image-1');

  const handleImageClick = (targetClass) => {
    if (targetClass !== cubeImageClass) {
      console.log(\`Show Image: \${targetClass.charAt(11)}\`);
      setCubeImageClass(targetClass);
    }
  };

  return (
    <div className="cube-gallery-container">
      <a href="https://www.projectschool.dev">
        <h1>Cube Image Gallery</h1>
      </a>
      <div className="cube-container">
        <div className={\`cube initial-position \${cubeImageClass}\`}>
          <img
            className="cube-face-image image-1"
            src="https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=" 1"
          />
          <img
            className="cube-face-image image-2"
            src="https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=" 2"
          />
          <img
            className="cube-face-image image-3"
            src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=" 3"
          />
          <img
            className="cube-face-image image-4"
            src="https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=" 4"
          />
          <img
            className="cube-face-image image-5"
            src="https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=" 5"
          />
          <img
            className="cube-face-image image-6"
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=" 6"
          />
        </div>
      </div>
      <h2>Click the images below to rotate the cube</h2>
      <div className="image-buttons">
        <input
          type="image"
          className="show-image-1"
          src="https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Thumbnail 1"
          onClick={() => handleImageClick('show-image-1')}
        />
        <input
          type="image"
          className="show-image-2"
          src="https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Thumbnail 2"
          onClick={() => handleImageClick('show-image-2')}
        />
        <input
          type="image"
          className="show-image-3"
          src="https://images.pexels.com/photos/5952645/pexels-photo-5952645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Thumbnail 3"
          onClick={() => handleImageClick('show-image-3')}
        />
        <input
          type="image"
          className="show-image-4"
          src="https://images.pexels.com/photos/5952647/pexels-photo-5952647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Thumbnail 4"
          onClick={() => handleImageClick('show-image-4')}
        />
        <input
          type="image"
          className="show-image-5"
          src="https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Thumbnail 5"
          onClick={() => handleImageClick('show-image-5')}
        />
        <input
          type="image"
          className="show-image-6"
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Thumbnail 6"
          onClick={() => handleImageClick('show-image-6')}
        />
      </div>
    </div>
  );
};

export default CubeGallery;

`];export{e as default};
//# sourceMappingURL=Cube-Image-Gallery-C7DF9lLh.js.map