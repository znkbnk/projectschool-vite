import  { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/wrongRoute.css';
import Footer from './Footer'
import Navbar from './Navbar';

const WrongRoute = () => {
   
      useEffect(() => {
        document.title = '404 - Page Not Found';
        
        return () => {
          document.title = 'React School'; // Reset to your default title
        };
      }, []);
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.3
          }
        }
      };
    
      const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1,
          transition: { 
            type: "spring",
            stiffness: 100
          }
        }
      };
    
      const codeBlockVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.2
          }
        }
      };
    
      const glitchVariants = {
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            yoyo: Infinity,
            duration: 0.2,
            delay: 0.5
          }
        }
      };
    
      return (
        <>
        <Navbar />
        <div className="rs_notfound_container">
          <motion.div 
            className="rs_notfound_content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="rs_notfound_code_container">
              <motion.div 
                className="rs_notfound_code_block"
                variants={codeBlockVariants}
              >
                <div className="rs_notfound_code_header">
                  <span className="rs_notfound_code_dot"></span>
                  <span className="rs_notfound_code_dot"></span>
                  <span className="rs_notfound_code_dot"></span>
                  <span className="rs_notfound_code_filename">Error.jsx</span>
                </div>
                <div className="rs_notfound_code_content">
                  <pre>
                    <code>
                      <span className="rs_notfound_code_keyword">const</span> <span className="rs_notfound_code_function">Page</span> = <span className="rs_notfound_code_symbol">()</span> <span className="rs_notfound_code_operator">=&gt;</span> <span className="rs_notfound_code_symbol">{'{'}</span><br/>
                      <span className="rs_notfound_code_indent"><span className="rs_notfound_code_comment">// Error 404: Page not found</span></span><br/>
                      <span className="rs_notfound_code_indent"><span className="rs_notfound_code_keyword">throw new</span> <span className="rs_notfound_code_error">Error</span><span className="rs_notfound_code_symbol">(</span><span className="rs_notfound_code_string">'404 - Component Not Found'</span><span className="rs_notfound_code_symbol">)</span>;</span><br/>
                      <span className="rs_notfound_code_symbol">{'}'}</span><br/><br/>
                      <span className="rs_notfound_code_keyword">export default</span> <span className="rs_notfound_code_function">Page</span>;
                    </code>
                  </pre>
                </div>
              </motion.div>
            </motion.div>
    
            <motion.h1 
              className="rs_notfound_title" 
              variants={itemVariants}
            >
              4
              <motion.span 
                className="rs_notfound_glitch" 
                variants={glitchVariants}
              >0</motion.span>
              4
            </motion.h1>
    
            <motion.p 
              className="rs_notfound_message" 
              variants={itemVariants}
            >
              Oops! The page you're looking for doesn't exist.
            </motion.p>
    
            <motion.div variants={itemVariants}>
              <motion.p className="rs_notfound_submessage">
                Did you make a mistake in the address bar?
              </motion.p>
            </motion.div>
    
            <motion.div variants={itemVariants}>
              <motion.a 
                href="/" 
                className="rs_notfound_button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="rs_notfound_button_text">&lt; Return to Home /&gt;</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
        </>
      );
    };

export default WrongRoute;