var e=[`
// App.jsx

import React, { useState } from "react";
import QRScanner from "./QRScanner";
import LocationTracker from "./LocationTracker";
import { motion } from "framer-motion";
import './styles.css'

const App = () => {
  const [scannedLocation, setScannedLocation] = useState(null);

  const handleScan = (data) => {
    setScannedLocation(data); // Assuming the QR code contains location info
  };

  return (
    <motion.div
      className="main-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1>Golf Course QR Scanner</h1>
      <QRScanner onScan={handleScan} />
      {scannedLocation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>Scanned Location: {scannedLocation}</h2>
          <LocationTracker />
        </motion.div>
      )}
    </motion.div>
  );
};

export default App;
`,`
// LocationTracker.jsx

import React from "react";
import { useGeolocated } from "react-geolocated";
import { motion } from "framer-motion";
import './styles.css'

const LocationTracker = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: { enableHighAccuracy: true },
    userDecisionTimeout: 5000,
  });

  if (!isGeolocationAvailable) {
    return <p>Your browser does not support Geolocation.</p>;
  }

  if (!isGeolocationEnabled) {
    return <p>Geolocation is not enabled.</p>;
  }

  if (!coords) {
    return <p>Getting location...</p>;
  }

  return (
    <motion.div
      className="location-tracker"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p>Latitude: {coords.latitude}</p>
      <p>Longitude: {coords.longitude}</p>
    </motion.div>
  );
};

export default LocationTracker;
`,`
// QRScanner.jsx

import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { motion } from 'framer-motion';
import './styles.css'

const QRScanner = ({ onScan }) => {
  const qrRef = useRef(null);

  useEffect(() => {
    const qrScanner = new Html5QrcodeScanner(
      'qr-scanner',
      { fps: 10, qrbox: 250 },
      false,
    );

    qrScanner.render(
      (data) => {
        onScan(data);
        qrScanner.clear();
      },
      (err) => {
        console.error('QR Scanner Error:', err);
      },
    );

    return () => {
      qrScanner.clear();
    };
  }, [onScan]);

  return (
    <motion.div
      id="qr-scanner"
      ref={qrRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    ></motion.div>
  );
};

export default QRScanner;

`];export{e as default};
//# sourceMappingURL=QR-GPS-Tracker-KjuzbWuf.js.map