import React, { useState, useEffect, useRef } from 'react';

export default function JourneySection({ guestName, onEditName }) {
  const rawName = guestName || 'Khách Mời';
  const words = rawName.trim().split(/\s+/);
  const taglineRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);

  const [taglineStyle, setTaglineStyle] = useState({ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' });
  const [nameStyle, setNameStyle] = useState({ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' });
  const [descStyle, setDescStyle] = useState({ opacity: 1, transform: 'translateY(0px)', filter: 'blur(0px)' });

  // Group name words into lines with a maximum of 2 words per line
  const nameLines = [];
  for (let i = 0; i < words.length; i += 2) {
    nameLines.push(words.slice(i, i + 2).join(' '));
  }

  useEffect(() => {
    const handleScroll = () => {
      // Tagline ("trân trọng kính mời"): ONLY starts fading out when nearing top edge of viewport (top <= 160px)
      if (taglineRef.current) {
        const rect = taglineRef.current.getBoundingClientRect();
        const fadeStartThreshold = 160; // 160px from top edge of viewport
        const fadeRange = 140; // Fades out over 140px range as it reaches 20px near top
        const localProgress = Math.min(Math.max((fadeStartThreshold - rect.top) / fadeRange, 0), 1);
        const eased = localProgress * localProgress;
        setTaglineStyle({
          opacity: 1 - eased,
          transform: `translateY(${-eased * 40}px)`,
          filter: `blur(${eased * 4}px)`,
          willChange: 'transform, opacity, filter'
        });
      }

      // Visitor Name: Starts fading when nearing top edge of viewport
      if (nameRef.current) {
        const rect = nameRef.current.getBoundingClientRect();
        const fadeStartThreshold = 180;
        const fadeRange = 160;
        const localProgress = Math.min(Math.max((fadeStartThreshold - rect.top) / fadeRange, 0), 1);
        const eased = localProgress * localProgress;
        setNameStyle({
          opacity: 1 - eased,
          transform: `translateY(${-eased * 50}px)`,
          filter: `blur(${eased * 5}px)`,
          willChange: 'transform, opacity, filter'
        });
      }

      // Description Paragraph: Starts fading when nearing top edge of viewport
      if (descRef.current) {
        const rect = descRef.current.getBoundingClientRect();
        const fadeStartThreshold = 160;
        const fadeRange = 160;
        const localProgress = Math.min(Math.max((fadeStartThreshold - rect.top) / fadeRange, 0), 1);
        const eased = localProgress * localProgress;
        setDescStyle({
          opacity: 1 - eased,
          transform: `translateY(${-eased * 50}px)`,
          filter: `blur(${eased * 5}px)`,
          willChange: 'transform, opacity, filter'
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="journey" className="w-full min-h-screen relative px-6 sm:px-10 lg:px-16 py-24 flex flex-col justify-center items-start text-left overflow-hidden bg-transparent">
      <div className="z-10 w-full max-w-[62vw] lg:max-w-[680px] ml-0 mr-auto flex flex-col items-start justify-center">
        
        {/* Line 0: Tagline ("TRÂN TRỌNG KÍNH MỜI") */}
        <p 
          ref={taglineRef}
          className="font-michroma text-[13px] sm:text-[14px] text-gold-dark font-bold uppercase tracking-[2px] mb-[16px] sm:mb-[20px] drop-shadow-sm transform-gpu"
          style={taglineStyle}
        >
          trân trọng kính mời
        </p>

        {/* Lines 1..N: Visitor Name */}
        <h2 
          ref={nameRef}
          onClick={onEditName}
          className="font-michroma font-bold uppercase text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.18] mb-0 cursor-pointer text-gold-dark drop-shadow-md select-none py-1 break-words w-full transform-gpu"
          style={nameStyle}
          title="Nhấp để đổi tên khách mời"
        >
          {nameLines.map((lineText, idx) => (
            <span key={idx} className="block text-gold-dark">
              {lineText}
            </span>
          ))}
        </h2>

        {/* Line N+1: Description Paragraph */}
        <p 
          ref={descRef}
          className="mt-[20px] sm:mt-[24px] max-w-[580px] text-navy/90 font-sans text-[clamp(1rem,1.25vw,1.2rem)] leading-[1.6] font-semibold transform-gpu"
          style={descStyle}
        >
          Sự hiện diện của bạn là niềm vinh hạnh to lớn và là món quà ý nghĩa nhất đối với mình trong ngày lễ đánh dấu cột mốc trưởng thành quan trọng này.
        </p>

      </div>
    </section>
  );
}

