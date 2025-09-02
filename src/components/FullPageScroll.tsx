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
  const [allowScrollInSection, setAllowScrollInSection] = useState(true);

  useEffect(() => {
    // Reset scroll position when entering the last section
    if (allowScrollInLastSection && currentSection === children.length - 1 && scrollableRef.current) {
      scrollableRef.current.scrollTop = 0;
    }
    
    // Prevent default body scrolling only when not in last section with scroll enabled
    const shouldPreventScroll = !allowScrollInLastSection || currentSection < children.length - 1;
    document.body.style.overflow = shouldPreventScroll ? 'hidden' : 'auto';
    
    let startY = 0;

    const handleScroll = (e: WheelEvent) => {
      // Special handling for last section if scrolling is enabled
      if (allowScrollInLastSection && currentSection === children.length - 1) {
        const scrollableContainer = scrollableRef.current;
        
        // Don't allow any scrolling during transitions
        if (isScrolling) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        
        // Check if we're trying to scroll up from the top of the scrollable content
        if (scrollableContainer && e.deltaY < 0 && scrollableContainer.scrollTop <= 0) {
          e.preventDefault();
          e.stopPropagation();
          
          if (!isScrolling && currentSection > 0) {
            setIsScrolling(true);
            setCurrentSection(currentSection - 1);
            setTimeout(() => {
              setIsScrolling(false);
            }, 600);
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
          
          // Reset scroll position if moving to last section
          if (allowScrollInLastSection && nextSection === children.length - 1) {
            setTimeout(() => {
              if (scrollableRef.current) {
                scrollableRef.current.scrollTop = 0;
              }
            }, 50);
          }
          
          setTimeout(() => {
            setIsScrolling(false);
          }, 600);
        }
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === 'ArrowDown' && currentSection < children.length - 1) {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentSection(currentSection + 1);
        setTimeout(() => setIsScrolling(false), 600);
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault();
        setIsScrolling(true);
        setCurrentSection(currentSection - 1);
        setTimeout(() => setIsScrolling(false), 600);
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
          setTimeout(() => setIsScrolling(false), 600);
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
            className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
              index === currentSection ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {backgroundComponent}
          </div>
        ))}
      </div>

      {/* Content Container - Only this scrolls */}
      <div className="relative z-10">
        <div
          ref={containerRef}
          className="overflow-hidden"
          style={{ height: '100vh' }}
        >
          <div
            className="transition-transform duration-600 ease-in-out"
            style={{
              transform: `translateY(-${currentSection * 100}vh)`,
              height: `${children.length * 100}vh`,
            }}
          >
            {children.map((child, index) => (
              <div key={index} className="w-full h-screen flex-shrink-0">
                {allowScrollInLastSection && index === children.length - 1 ? (
                  // Last section with scrollable content
                  <div ref={scrollableRef} className="overflow-auto h-full">
                    {child}
                  </div>
                ) : (
                  // Regular sections
                  child
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FullPageScroll;