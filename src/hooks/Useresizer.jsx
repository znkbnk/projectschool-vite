import { useState, useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook for resizable panel functionality
 * @param {number} initialWidth - Initial width in pixels (default: 400)
 * @param {number} minWidth - Minimum width in pixels (default: 250)
 * @param {number} maxWidthPercent - Maximum width as percentage of viewport (default: 70)
 * @returns {object} - { width, isResizing, resizerProps, containerRef }
 */
const useResizer = (initialWidth = 400, minWidth = 250, maxWidthPercent = 70) => {
  const [width, setWidth] = useState(() => {
    // Try to restore saved width from localStorage
    const saved = localStorage.getItem('editorPanelWidth');
    return saved ? parseInt(saved, 10) : initialWidth;
  });
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsResizing(true);
    startXRef.current = e.clientX;
    startWidthRef.current = width;
  }, [width]);

  const handleMouseMove = useCallback((e) => {
    if (!isResizing) return;

    const delta = e.clientX - startXRef.current;
    const maxWidth = window.innerWidth * (maxWidthPercent / 100);
    const newWidth = Math.min(Math.max(startWidthRef.current + delta, minWidth), maxWidth);
    
    setWidth(newWidth);
  }, [isResizing, minWidth, maxWidthPercent]);

  const handleMouseUp = useCallback(() => {
    if (isResizing) {
      setIsResizing(false);
      // Save to localStorage
      localStorage.setItem('editorPanelWidth', width.toString());
    }
  }, [isResizing, width]);

  // Touch support
  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    setIsResizing(true);
    startXRef.current = touch.clientX;
    startWidthRef.current = width;
  }, [width]);

  const handleTouchMove = useCallback((e) => {
    if (!isResizing) return;
    
    const touch = e.touches[0];
    const delta = touch.clientX - startXRef.current;
    const maxWidth = window.innerWidth * (maxWidthPercent / 100);
    const newWidth = Math.min(Math.max(startWidthRef.current + delta, minWidth), maxWidth);
    
    setWidth(newWidth);
  }, [isResizing, minWidth, maxWidthPercent]);

  const handleTouchEnd = useCallback(() => {
    if (isResizing) {
      setIsResizing(false);
      localStorage.setItem('editorPanelWidth', width.toString());
    }
  }, [isResizing, width]);

  // Global mouse/touch event listeners
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isResizing, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Double-click to reset to default
  const handleDoubleClick = useCallback(() => {
    setWidth(initialWidth);
    localStorage.setItem('editorPanelWidth', initialWidth.toString());
  }, [initialWidth]);

  const resizerProps = {
    onMouseDown: handleMouseDown,
    onTouchStart: handleTouchStart,
    onDoubleClick: handleDoubleClick,
    className: 'resizer',
    role: 'separator',
    'aria-orientation': 'vertical',
    'aria-valuenow': width,
    'aria-valuemin': minWidth,
    'aria-valuemax': window.innerWidth * (maxWidthPercent / 100),
    tabIndex: 0,
  };

  return {
    width,
    isResizing,
    resizerProps,
    containerRef,
  };
};

export default useResizer;