import { motion, AnimatePresence } from "framer-motion";

const VideoPopup = ({ showVideoPopup, videoLink, onClose }) => {
  const getEmbedLink = (videoLink) => {
    try {
      if (videoLink.includes("youtu.be")) {
        const videoId = videoLink.split("/").pop();
        return `https://www.youtube.com/embed/${videoId}`;
      } else {
        return videoLink;
      }
    } catch (error) {
      console.error("Error generating embed link:", error);
      return videoLink;
    }
  };

  return (
    <AnimatePresence>
      {showVideoPopup && (
        <motion.div
          className='video-popup-window'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className='video-close-button' onClick={onClose}>
            &times;
          </button>
          <div className='video-container'>
            <iframe
              src={getEmbedLink(videoLink)}
              title='Video Lesson'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              style={{ border: "none" }}
            ></iframe>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoPopup;