var e=[`
// App.js

import LiveMonitoringPage from './pages/LiveMonitoringPage';

const App = () => {
  return (
    <div>
      <LiveMonitoringPage />
    </div>
  );
};

export default App;

`,`
// api/api.js

import axios from 'axios';

export const fetchStreams = async () => {
  try {
    const response = await axios.get('/api/streams'); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching streams:', error);
    return { streams: [] };
  }
};

`,`
// components/VideoPlayer.js

import  { useEffect, useRef } from 'react';
import videojs from 'video.js';
import PropTypes from 'prop-types'; 
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        autoplay: true,
        controls: true,
        sources: [{ src: url, type: 'application/x-mpegURL' }],
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [url]);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-big-play-centered" />
      </div>
    </div>
  );
};


VideoPlayer.propTypes = {
  url: PropTypes.string.isRequired, 
};

export default VideoPlayer;

`,`
// pages/LiveMonitoringPage.js

// pages/LiveMonitoringPage.js

import { useEffect, useState } from 'react';
import { fetchStreams } from '../api/api';
import VideoPlayer from '../components/VideoPlayer';

const LiveMonitoringPage = () => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    const loadStreams = async () => {
      const data = await fetchStreams();
      setStreams(data.streams || []); // Ensure streams is always an array
    };

    loadStreams();
  }, []);

  return (
    <div>
      <h1>Live Monitoring</h1>
      <div>
        {streams.length === 0 ? (
          <p>No streams available</p>
        ) : (
          streams.map((url, index) => <VideoPlayer key={index} url={url} />)
        )}
      </div>
    </div>
  );
};

export default LiveMonitoringPage;


`];export{e as default};
//# sourceMappingURL=VideoSense-Live-Monitoring-CotVfaiH.js.map