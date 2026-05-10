import { useEffect, useState } from 'react';
import './CrazyScrollPhrase.css';

const CrazyScrollPhrase = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-indicator ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="scroll-content">
        <div className="scroll-text">
          {'Scroll Down'.split('').map((char, index) => (
            <span key={index} className="char" style={{animationDelay: `${index * 0.1}s`}}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <div className="scroll-icon">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
    </div>
  );
};

export default CrazyScrollPhrase;