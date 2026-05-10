import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/notFound.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "No Coding Required";

    return () => {
      document.title = "React School"; // Reset to default title
    };
  }, []);

  // Generate random positions for floating elements
  const generateRandomElements = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
  };

  const floatingElements = generateRandomElements(15);

  return (
    <div className='ncr_container'>
      {/* Background animated elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className='ncr_floating_element'
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -50, 0, 50, 0],
            x: [0, 30, 0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: {
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: element.duration * 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: element.duration * 2,
              repeat: Infinity,
              ease: "linear",
            },
            delay: element.delay,
          }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className='ncr_card'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='ncr_card_inner'>
          <motion.div
            className='ncr_illustration'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Decorative abstract code elements */}
            <div className='ncr_code_visual'>
              <motion.div
                className='ncr_code_bracket'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              ></motion.div>
              <div className='ncr_code_lines'>
                <img
                  src='/images/logowebp.webp'
                  className='not-found-logo'
                  alt='website logo'
                />
              </div>
              <motion.div
                className='ncr_code_bracket'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            className='ncr_content'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h2 className='ncr_title'>No Coding Required</h2>
            <p className='ncr_description'>
              This task can be completed without writing any code.
            </p>
            <div className='ncr_instruction'>
              <div className='ncr_instruction_icon'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
              <p>
                Please follow the instructions on the left panel to complete
                this task.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
