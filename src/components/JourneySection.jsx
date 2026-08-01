import React, { useState, useEffect } from 'react';

export default function JourneySection({ guestName, onEditName }) {
  const rawName = guestName || 'Khách Mời';
  const words = rawName.trim().split(/\s+/);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Group name words into lines with a maximum of 2 words per line
  const nameLines = [];
  for (let i = 0; i < words.length; i += 2) {
    nameLines.push(words.slice(i, i + 2).join(' '));
  }

  // Total lines: Tagline (0) + Name lines (1..N) + Description (N+1)
  const totalLines = 1 + nameLines.length + 1;

  useEffect(() => {
    const handleScroll = () => {
      const journeyEl = document.getElementById('journey');
      if (journeyEl) {
        const top = journeyEl.offsetTop;
        const scrollY = window.scrollY;
        
        // Progress over normal natural scroll of Section 2
        const scrollDistance = Math.max(window.innerHeight * 0.9, 1);
        const progress = Math.min(Math.max((scrollY - top + window.innerHeight * 0.2) / scrollDistance, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to calculate line-by-line slide out as page scrolls naturally
  const getLineStyle = (lineIndex) => {
    const stepSize = 0.85 / totalLines;
    const startStep = lineIndex * stepSize;
    const localProgress = Math.min(Math.max((scrollProgress - startStep) / (stepSize * 1.1), 0), 1);

    const eased = localProgress * localProgress * (3 - 2 * localProgress);
    const lineY = -eased * 60; // Natural 60px float up
    const lineOpacity = Math.max(1 - localProgress * 1.3, 0); // Natural fade out
    const lineBlur = localProgress * 6;

    return {
      transform: `translateY(${lineY}px)`,
      opacity: lineOpacity,
      filter: `blur(${lineBlur}px)`,
      willChange: 'transform, opacity, filter'
    };
  };

  const taglineStyle = getLineStyle(0);
  const descStyle = getLineStyle(1 + nameLines.length);

  return (
    <section id="journey" className="w-full min-h-screen relative px-6 sm:px-10 lg:px-16 py-24 flex flex-col justify-center items-start text-left overflow-hidden bg-transparent">
      <div className="z-10 w-full max-w-[62vw] lg:max-w-[680px] ml-0 mr-auto flex flex-col items-start justify-center">
        
        {/* Line 0: Tagline ("TRÂN TRỌNG KÍNH MỜI") */}
        <p 
          className="font-michroma text-[13px] sm:text-[14px] text-gold-dark font-bold uppercase tracking-[2px] mb-[16px] sm:mb-[20px] drop-shadow-sm transform-gpu"
          style={taglineStyle}
        >
          trân trọng kính mời
        </p>

        {/* Lines 1..N: Visitor Name */}
        <h2 
          onClick={onEditName}
          className="font-michroma font-bold uppercase text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.18] mb-0 cursor-pointer text-gold-dark drop-shadow-md select-none py-1 break-words w-full"
          title="Nhấp để đổi tên khách mời"
        >
          {nameLines.map((lineText, idx) => {
            const lineStyle = getLineStyle(1 + idx);
            return (
              <span 
                key={idx} 
                className="block transform-gpu text-gold-dark"
                style={lineStyle}
              >
                {lineText}
              </span>
            );
          })}
        </h2>

        {/* Line N+1: Description Paragraph */}
        <p 
          className="mt-[20px] sm:mt-[24px] max-w-[580px] text-navy/90 font-sans text-[clamp(1rem,1.25vw,1.2rem)] leading-[1.6] font-semibold transform-gpu"
          style={descStyle}
        >
          Sự hiện diện của bạn là niềm vinh hạnh to lớn và là món quà ý nghĩa nhất đối với mình trong ngày lễ đánh dấu cột mốc trưởng thành quan trọng này.
        </p>

      </div>
    </section>
  );
}
