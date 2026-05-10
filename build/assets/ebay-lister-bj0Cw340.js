var e=[`
// App.js

import React, { useState, useMemo } from "react";
import "./styles.css";

// Sample templates
const TEMPLATES = [
  { id: 1, name: "Modern Store Template", layout: "modern-template" },
  { id: 2, name: "Baby Store Template", layout: "baby-template" },
];

function App() {
  const [listing, setListing] = useState({
    title: "",
    bannerImage: null,
    bannerText: "GET UP TO 50% OFF",
    images: [],
    imageCaptions: ["", "", "", ""],
    template: TEMPLATES[0],
    description: "",
    profile: { shipping: "", warranty: "" },
    storeName: "STORE LOGO",
    navLinks: ["SAVE IT", "SHARE", "SEND US"],
  });
  const [savedListings, setSavedListings] = useState([]);
  const [defaultTemplate, setDefaultTemplate] = useState(null);
  const [editingField, setEditingField] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setListing((prev) => ({ ...prev, [name]: value }));
  };

  // Handle profile block changes
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setListing((prev) => ({
      ...prev,
      profile: { ...prev.profile, [name]: value },
    }));
  };

  // Handle banner image upload
  const handleBannerImageUpload = (e) => {
    const file = e.target.files[0];
    setListing((prev) => ({ ...prev, bannerImage: file }));
  };

  // Handle smaller images upload
  const handleImageUpload = (e) => {
    const maxImages = listing.template.id === 1 ? 3 : 4;
    const newImages = Array.from(e.target.files).slice(
      0,
      maxImages - listing.images.length
    );
    setListing((prev) => ({
      ...prev,
      images: [...prev.images, ...newImages].slice(0, maxImages),
    }));
  };

  // Remove a smaller image
  const removeImage = (index) => {
    setListing((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
      imageCaptions: prev.imageCaptions.map((caption, i) =>
        i === index ? "" : caption
      ),
    }));
  };

  // Handle caption change
  const handleCaptionChange = (index, value) => {
    setListing((prev) => ({
      ...prev,
      imageCaptions: prev.imageCaptions.map((caption, i) =>
        i === index ? value : caption
      ),
    }));
  };

  // Handle inline editing in preview
  const handlePreviewEdit = (field, value) => {
    if (field === "bannerText") {
      setListing((prev) => ({ ...prev, bannerText: value }));
    } else if (field === "description") {
      setListing((prev) => ({ ...prev, description: value }));
    } else if (field === "storeName") {
      setListing((prev) => ({ ...prev, storeName: value }));
    } else if (field.startsWith("nav")) {
      const index = parseInt(field.split("nav")[1]) - 1;
      setListing((prev) => ({
        ...prev,
        navLinks: prev.navLinks.map((link, i) => (i === index ? value : link)),
      }));
    } else if (field.startsWith("caption")) {
      const index = parseInt(field.split("-")[1]);
      handleCaptionChange(index, value);
    } else {
      setListing((prev) => ({ ...prev, [field]: value }));
    }
    setEditingField(null);
  };

  // Generate HTML with both templates
  const generatedHTML = useMemo(() => {
    const {
      title,
      bannerImage,
      bannerText,
      images,
      imageCaptions,
      template,
      description,
      profile,
      storeName,
      navLinks,
    } = listing;
    const bannerImageSrc = bannerImage ? URL.createObjectURL(bannerImage) : "";
    const imageGrid = images
      .map(
        (img, idx) => \`
        <div class="image-item">
          <div class="image-container">
            <img src="\${URL.createObjectURL(img)}" alt="item-\${idx}" />
          </div>
          <p class="caption" data-field="caption-\${idx}">\${
          imageCaptions[idx] || "Add Caption"
        }</p>
        </div>
      \`
      )
      .join("");

    if (template.id === 1) {
      // Modern Store Template
      return \`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              .modern-template { font-family: Arial, sans-serif; background-color: #f5f6f5; padding: 20px; }
              .listing-grid {
                display: grid;
                grid-template-rows: auto auto auto 1fr auto;
                gap: 20px;
                max-width: 100%;
              }
              .header {
                background-color: #007bff;
                color: white;
                padding: 10px;
                text-align: center;
                font-size: 1.2em;
                font-weight: bold;
              }
              .banner {
                position: relative;
                width: 100%;
                height: 300px;
                background: #ccc;
              }
              .banner img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              .banner-text {
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                background: rgba(255, 255, 255, 0.7);
                padding: 10px 20px;
                font-size: 1.5em;
                font-weight: bold;
                color: #333;
              }
              .banner-text.yellow {
                background: rgba(255, 215, 0, 0.7);
                color: #000;
              }
              .image-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
              }
              .image-item {
                text-align: center;
              }
              .image-container {
                width: 100%;
                height: 150px;
                overflow: hidden;
              }
              .image-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              .caption {
                margin-top: 5px;
                font-size: 0.9em;
                color: #333;
                text-transform: uppercase;
              }
              .description {
                line-height: 1.6;
                font-size: 1em;
                color: #333;
              }
              .profile {
                border-top: 1px solid #ccc;
                padding-top: 10px;
                font-size: 0.9em;
                color: #555;
              }
            </style>
            <script>
              document.addEventListener('click', (e) => {
                const field = e.target.getAttribute('data-field');
                if (field) {
                  e.preventDefault(); // Prevent default behavior for <a> tags
                  const currentValue = e.target.innerText;
                  const newValue = prompt('Edit text:', currentValue);
                  if (newValue !== null) {
                    e.target.innerText = newValue;
                    window.parent.postMessage({ field, value: newValue }, '*');
                  }
                }
              });
            <\/script>
          </head>
          <body>
            <div class="\${template.layout} listing-grid">
              <div class="header" data-field="storeName">\${storeName}</div>
              <div class="banner">
                \${
                  bannerImage
                    ? \`<img src="\${bannerImageSrc}" alt="banner" />\`
                    : "<p>Add Banner Image</p>"
                }
                <div class="banner-text yellow" data-field="bannerText">\${bannerText}</div>
              </div>
              <div class="image-grid">\${
                imageGrid || "<p>No images uploaded yet</p>"
              }</div>
              <h2 data-field="title">\${title || "Your Title Here"}</h2>
              <div class="description" data-field="description">\${
                description || "Enter your description..."
              }</div>
              <div class="profile">
                <p><strong>Shipping:</strong> \${profile.shipping || "TBD"}</p>
                <p><strong>Warranty:</strong> \${profile.warranty || "TBD"}</p>
              </div>
            </div>
          </body>
        </html>
      \`;
    } else {
      // Baby Store Template
      return \`
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              .baby-template {
                font-family: Arial, sans-serif;
                background-color: #e6f4f1;
                padding: 20px;
              }
              .listing-grid {
                display: grid;
                grid-template-rows: auto auto 1fr auto;
                gap: 20px;
                max-width: 100%;
              }
              .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #fff;
                padding: 10px 20px;
                border-bottom: 1px solid #ccc;
              }
              .store-name {
                font-size: 1.2em;
                font-weight: bold;
                color: #2c3e50;
              }
              .nav-links a {
                margin-left: 15px;
                text-decoration: none;
                color: #2c3e50;
                font-size: 0.9em;
                text-transform: uppercase;
              }
              .image-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
                background-color: #fff;
                padding: 15px;
                border: 1px solid #ddd;
              }
              .image-item {
                text-align: center;
              }
              .image-container {
                width: 100%;
                height: 150px;
                overflow: hidden;
              }
              .image-container img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              .caption {
                margin-top: 5px;
                font-size: 0.9em;
                color: #333;
                text-transform: uppercase;
              }
              .description {
                line-height: 1.6;
                font-size: 1em;
                color: #333;
                background-color: #fff;
                padding: 15px;
                border: 1px solid #ddd;
              }
              .profile {
                border-top: 1px solid #ccc;
                padding-top: 10px;
                font-size: 0.9em;
                color: #555;
              }
            </style>
            <script>
              document.addEventListener('click', (e) => {
                const field = e.target.getAttribute('data-field');
                if (field) {
                  e.preventDefault(); // Prevent default behavior for <a> tags
                  const currentValue = e.target.innerText;
                  const newValue = prompt('Edit text:', currentValue);
                  if (newValue !== null) {
                    e.target.innerText = newValue;
                    window.parent.postMessage({ field, value: newValue }, '*');
                  }
                }
              });
            <\/script>
          </head>
          <body>
            <div class="\${template.layout} listing-grid">
              <div class="header">
                <div class="store-name" data-field="storeName">\${storeName}</div>
                <div class="nav-links">
                  <a href="#" data-field="nav1">\${navLinks[0]}</a>
                  <a href="#" data-field="nav2">\${navLinks[1]}</a>
                  <a href="#" data-field="nav3">\${navLinks[2]}</a>
                </div>
              </div>
              <div class="image-grid">\${
                imageGrid || "<p>No images uploaded yet</p>"
              }</div>
              <h2 data-field="title">\${title || "Your Title Here"}</h2>
              <div class="description" data-field="description">\${
                description || "Enter your description..."
              }</div>
              <div class="profile">
                <p><strong>Shipping:</strong> \${profile.shipping || "TBD"}</p>
                <p><strong>Warranty:</strong> \${profile.warranty || "TBD"}</p>
              </div>
            </div>
          </body>
        </html>
      \`;
    }
  }, [listing]);

  // Listen for messages from iframe to update state
  React.useEffect(() => {
    const handleMessage = (e) => {
      if (e.data.field && e.data.value !== undefined) {
        handlePreviewEdit(e.data.field, e.data.value);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Save listing
  const saveListing = () => {
    if (savedListings.length < 10) {
      setSavedListings((prev) => [...prev, { ...listing, id: Date.now() }]);
      alert("Listing saved!");
    } else {
      alert("Max 10 listings reached!");
    }
  };

  // Set default template
  const saveDefaultTemplate = () => {
    setDefaultTemplate(listing.template);
    alert("Default template saved!");
  };

  return (
    <div className='App'>
      <h1>eBay Lister</h1>
      <div className='template-selection'>
        <h3>Choose a Template</h3>
        <div className='template-options'>
          {TEMPLATES.map((t) => (
            <button
              key={t.id}
              className={listing.template.id === t.id ? "active" : ""}
              onClick={() =>
                setListing((prev) => ({
                  ...prev,
                  template: t,
                  images: prev.images.slice(0, t.id === 1 ? 3 : 4),
                }))
              }
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
      <div className='container'>
        {/* Form Section */}
        <div className='form-section'>
          <h2>Create Listing</h2>
          <input
            type='text'
            name='title'
            placeholder='Listing Title'
            value={listing.title}
            onChange={handleChange}
          />
          {listing.template.id === 1 && (
            <div className='banner-upload'>
              <label>Banner Image:</label>
              <input
                type='file'
                accept='image/*'
                onChange={handleBannerImageUpload}
              />
              {listing.bannerImage && (
                <div className='banner-upload-image'>
                  <img
                    src={URL.createObjectURL(listing.bannerImage)}
                    alt='banner-preview'
                    style={{ maxWidth: "200px", margin: "10px 0" }}
                  />
                  <button
                    onClick={() =>
                      setListing((prev) => ({ ...prev, bannerImage: null }))
                    }
                  >
                    Remove Banner
                  </button>
                </div>
              )}
            </div>
          )}
          <div className='image-upload'>
            <label>
              Upload Images (up to {listing.template.id === 1 ? 3 : 4}):
            </label>
            <input
              type='file'
              multiple
              accept='image/*'
              onChange={handleImageUpload}
            />
            <div className='image-list'>
              {listing.images.map((img, idx) => (
                <div key={idx} className='image-item'>
                  <img
                    src={URL.createObjectURL(img)}
                    alt={\`preview-\${idx}\`}
                    style={{ maxWidth: "100px", margin: "5px" }}
                  />
                  <input
                    type='text'
                    placeholder='Caption'
                    value={listing.imageCaptions[idx]}
                    onChange={(e) => handleCaptionChange(idx, e.target.value)}
                  />
                  <button onClick={() => removeImage(idx)}>Remove</button>
                </div>
              ))}
            </div>
          </div>
          <h3>Profile Blocks</h3>
          <input
            type='text'
            name='shipping'
            placeholder='Shipping Info'
            value={listing.profile.shipping}
            onChange={handleProfileChange}
          />
          <input
            type='text'
            name='warranty'
            placeholder='Warranty Info'
            value={listing.profile.warranty}
            onChange={handleProfileChange}
          />
          <textarea
            name='description'
            placeholder='Main Description'
            value={listing.description}
            onChange={handleChange}
          />
          <div className='actions'>
            <button onClick={() => alert(generatedHTML)}>Generate HTML</button>
            <button onClick={saveListing}>Save Listing</button>
            <button onClick={saveDefaultTemplate}>
              Set as Default Template
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className='preview-section'>
          <h2>Live Preview</h2>
          <iframe
            title='Listing Preview'
            srcDoc={generatedHTML}
            style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      {/* Saved Listings */}
      <h3>Saved Listings ({savedListings.length}/10)</h3>
      <ul>
        {savedListings.map((l) => (
          <li key={l.id}>{l.title || "Untitled"}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

`];export{e as default};
//# sourceMappingURL=ebay-lister-bj0Cw340.js.map