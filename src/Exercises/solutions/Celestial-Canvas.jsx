const solutionCode1 = `
import React, { useEffect, useState, useRef, useCallback } from 'react';
import './styles.css'


const Stars = () => {
  const [starsOn, setStarsOn] = useState(true);
  const canvasRef = useRef(null);

  const createStar = useCallback((canvas) => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speedX: -Math.random() * 0.5,
      speedY: 0,
      color: \`hsl(\${Math.random() * 60 + 200}, 100%, 80%)\`,
      isFlashing: false,
      flashDuration: 0,
      flashInterval: Math.random() * 200 + 100,
      flashTimer: Math.random() * (Math.random() * 200 + 100),
    };
  }, []);

  const updateStar = useCallback((star, canvas) => {
    star.x += star.speedX;
    if (star.x < 0) star.x = canvas.width;

    star.flashTimer--;
    if (star.flashTimer <= 0) {
      star.isFlashing = true;
      star.flashDuration = 5;
      star.flashTimer = star.flashInterval;
    }
    if (star.isFlashing) {
      star.flashDuration--;
      if (star.flashDuration <= 0) {
        star.isFlashing = false;
      }
    }
    return star;
  }, []);

  const drawStar = useCallback((ctx, star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.isFlashing ? star.size * 1.5 : star.size, 0, Math.PI * 2);
    ctx.fillStyle = star.isFlashing ? 'white' : star.color;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
    gradient.addColorStop(0, \`rgba(255, 255, 255, \${star.isFlashing ? 1 : 0.8})\`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.arc(star.x, star.y, star.size * (star.isFlashing ? 4 : 3), 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }, []);

  const createNebula = useCallback((canvas) => {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 200 + 100,
      color: \`hsl(\${Math.random() * 180 + 200}, 70%, 30%)\`,
      alpha: Math.random() * 0.5 + 0.1,
    };
  }, []);

  const drawNebula = useCallback((ctx, nebula) => {
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(nebula.x, nebula.y, 0, nebula.x, nebula.y, nebula.size);
    gradient.addColorStop(0, nebula.color);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.globalAlpha = nebula.alpha;
    ctx.arc(nebula.x, nebula.y, nebula.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.closePath();
  }, []);

  const createComet = useCallback((canvas) => {
    return {
      x: canvas.width + 100,
      y: Math.random() * canvas.height,
      size: 2,
      speedX: -Math.random() * 45 - 3,
      speedY: (Math.random() - 1.5) * 2,
      tailLength: 80,
    };
  }, []);

  const updateComet = useCallback((comet) => {
    comet.x += comet.speedX;
    comet.y += comet.speedY;
    return comet;
  }, []);

  const drawComet = useCallback((ctx, comet) => {
    ctx.beginPath();
    ctx.moveTo(comet.x, comet.y);
    const gradient = ctx.createLinearGradient(
      comet.x, comet.y, 
      comet.x + comet.tailLength, comet.y
    );
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.strokeStyle = gradient;
    ctx.lineWidth = comet.size;
    ctx.lineTo(comet.x + comet.tailLength, comet.y);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(comet.x, comet.y, comet.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }, []);

  useEffect(() => {
    if (!starsOn) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let nebulae = [];
    let comet = null;

    const createStars = () => {
      for (let i = 0; i < 1000; i++) {
        stars.push(createStar(canvas));
      }
    };

    const createNebulae = () => {
      for (let i = 0; i < 5; i++) {
        nebulae.push(createNebula(canvas));
      }
    };

    const drawBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#0c1445');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      
      nebulae.forEach(nebula => drawNebula(ctx, nebula));

      stars.forEach(star => {
        updateStar(star, canvas);
        drawStar(ctx, star);
      });

      if (comet) {
        updateComet(comet);
        drawComet(ctx, comet);
        if (comet.x + comet.tailLength < 0) {
          comet = null;
        }
      }

      requestAnimationFrame(animate);
    };

    createStars();
    createNebulae();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      nebulae = [];
      createStars();
      createNebulae();
    };

    window.addEventListener('resize', handleResize);

    const cometInterval = setInterval(() => {
      if (!comet) comet = createComet(canvas);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(cometInterval);
    };
  }, [starsOn, createStar, updateStar, drawStar, createNebula, drawNebula, createComet, updateComet, drawComet]);

  const toggleStars = (e) => {
    e.preventDefault();
    setStarsOn(prev => !prev);
  };

  return (
    <div>
      {starsOn && <canvas ref={canvasRef} className="stars-canvas"></canvas>}
      <a className="star-toggle" href="/" onClick={toggleStars}>
        {starsOn ? 'Stars Off' : 'Stars On'}
      </a>
    </div>
  );
};

export default Stars;
`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;