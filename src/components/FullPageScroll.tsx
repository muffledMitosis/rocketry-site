'use client';

import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface FullPageScrollProps {
  children: ReactNode[];
  backgroundComponents: ReactNode[];
  allowScrollInLastSection?: boolean;
}

const FullPageScroll: React.FC<FullPageScrollProps> = ({ children, backgroundComponents, allowScrollInLastSection = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Prevent default body scrolling only when not in last section with scroll enabled
    const shouldPreventScroll = !allowScrollInLastSection || currentSection < children.length - 1;
    document.body.style.overflow = shouldPreventScroll ? 'hidden' : 'auto';
    
    let startY = 0;

    const handleScroll = (e: WheelEvent) => {
      // Special handling for last section if scrolling is enabled
      if (allowScrollInLastSection && currentSection === children.length - 1) {
        const scrollableContainer = scrollableRef.current;
        
        // Check if we're trying to scroll up from the top of the scrollable content
        if (scrollableContainer && e.deltaY < 0 && scrollableContainer.scrollTop <= 0) {
          e.preventDefault();
          e.stopPropagation();
          
          if (!isScrolling && currentSection > 0) {
            setIsScrolling(true);
            setCurrentSection(currentSection - 1);
            setTimeout(() => {
              setIsScrolling(false);
            }, 1000);
          }
          return;
        }
        
        // If not at the top or scrolling down, allow normal scrolling within the content
        if (scrollableContainer.scrollTop > 0 || e.deltaY > 0) {
          return;
        }
      }

      e.preventDefault();
      e.stopPropagation();
      
      if (isScrolling) return;

      const delta = e.deltaY;
      let nextSection = currentSection;

      if (Math.abs(delta) > 10) { // Minimum scroll threshold
        if (delta > 0 && currentSection < children.length - 1) {
          nextSection = currentSection + 1;
        } else if (delta < 0 && currentSection > 0) {
          nextSection = currentSection - 1;
        }

        if (nextSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(nextSection);
          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === 'ArrowDown' && currentSection < children.length - 1) {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentSection(currentSection + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentSection(currentSection - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const endY = e.changedTouches[0].clientY;
      const diff = startY - endY;

      if (Math.abs(diff) > 50) { // Minimum swipe distance
        let nextSection = currentSection;
        
        if (diff > 0 && currentSection < children.length - 1) {
          nextSection = currentSection + 1;
        } else if (diff < 0 && currentSection > 0) {
          nextSection = currentSection - 1;
        }

        if (nextSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(nextSection);
          setTimeout(() => setIsScrolling(false), 1000);
        }
      }
    };

    // Add event listeners
    document.addEventListener('wheel', handleScroll, { passive: false });
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      // Restore body scrolling
      document.body.style.overflow = '';
      
      document.removeEventListener('wheel', handleScroll);
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, isScrolling, children.length, allowScrollInLastSection]);

  return (
    <div className="relative overflow-hidden">
      {/* Dynamic Background Components Layer */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
        }}
      >
        {backgroundComponents.map((backgroundComponent, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSection ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {backgroundComponent}
          </div>
        ))}
      </div>

      {/* Content Container - Only this scrolls */}
      <div className="relative z-10">
        {currentSection < children.length - 1 ? (
          // Snap scrolling for first sections
          <div
            ref={containerRef}
            className="overflow-hidden"
            style={{ height: '100vh' }}
          >
            <div
              className="transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateY(-${currentSection * 100}vh)`,
                height: `${children.length * 100}vh`,
              }}
            >
              {children.map((child, index) => (
                <div key={index} className="w-full h-screen flex-shrink-0">
                  {child}
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Scrollable last section
          <div
            ref={scrollableRef}
            className="overflow-auto"
            style={{ height: '100vh' }}
          >
            {children[currentSection]}
          </div>
        )}
      </div>

      {/* Section Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {backgroundComponents.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => {
              if (!isScrolling && index !== currentSection) {
                setIsScrolling(true);
                setCurrentSection(index);
                setTimeout(() => setIsScrolling(false), 1000);
              }
            }}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullPageScroll;