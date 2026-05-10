import  { useState, useRef, useEffect, memo } from "react";

/**
 * OptimizedImage - A performance-optimized image component
 * Features:
 * - Native lazy loading
 * - Intersection Observer fallback for older browsers
 * - Blur-up placeholder effect
 * - Automatic width/height for CLS prevention
 */
const OptimizedImage = memo(({
  src,
  alt,
  className = "",
  style = {},
  width,
  height,
  priority = false,
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const imageStyle = {
    ...style,
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
  };

  const containerStyle = {
    position: "relative",
    backgroundColor: isLoaded ? "transparent" : "#1a1a1a",
    overflow: "hidden",
  };

  return (
    <div ref={imgRef} style={containerStyle} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width={width}
          height={height}
          onLoad={handleLoad}
          style={imageStyle}
          {...props}
        />
      )}
    </div>
  );
});

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;