import React, { useState, useEffect } from 'react';
import { Edit3 } from 'lucide-react';

export default function HeroSection({ guestName, onEditName }) {
  const headlineText = "COMMENCEMENT";
  const letters = headlineText.split("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState('11vw');

  // Exact headline fitting (40px padding on left & right)
  useEffect(() => {
    const fitHeadline = () => {
      const horizontalPadding = window.innerWidth < 720 ? 48 : 80;
      const targetWidth = Math.max(window.innerWidth - horizontalPadding, 100);
      const measurer = document.createElement("span");
      measurer.textContent = headlineText;
      measurer.style.position = "fixed";
      measurer.style.visibility = "hidden";
      measurer.style.whiteSpace = "nowrap";
      measurer.style.fontFamily = "Michroma, sans-serif";
      measurer.style.fontWeight = "700";
      measurer.style.lineHeight = "0.82";
      document.body.appendChild(measurer);

      let min = 12;
      let max = window.innerWidth;
      for (let i = 0; i < 20; i++) {
        const mid = (min + max) / 2;
        measurer.style.fontSize = `${mid}px`;
        if (measurer.getBoundingClientRect().width <= targetWidth) {
          min = mid;
        } else {
          max = mid;
        }
      }
      setFontSize(`${min}px`);
      document.body.removeChild(measurer);
    };

    fitHeadline();
    window.addEventListener('resize', fitHeadline);
    if (document.fonts) {
      document.fonts.ready.then(fitHeadline);
    }

    return () => window.removeEventListener('resize', fitHeadline);
  }, []);

  // Scroll position calculation
  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollRange = Math.max(window.innerHeight * 0.85, 1);
  const normalizedProgress = Math.min(Math.max(scrollProgress / scrollRange, 0), 1);

  // Divide scroll range into 12 distinct non-overlapping slots for each letter
  const stepSize = 1 / letters.length;

  return (
    <div className="relative w-full h-[175vh] bg-transparent">
      <section id="hero" className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between items-center text-center bg-transparent pt-20 sm:pt-24 pb-8 sm:pb-12">
        {/* Top Floating Guest Badge */}
        <div className="z-20 px-4">
          <div 
            onClick={onEditName}
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 rounded-full bg-cream/95 backdrop-blur-md border border-gold/50 text-navy font-serif text-base sm:text-xl shadow-2xl cursor-pointer hover:bg-white hover:border-gold hover:shadow-gold/30 hover:scale-[1.02] transition-all duration-300"
            title="Bấm vào đây để thay đổi tên khách mời"
          >
            <span className="flex items-center gap-1.5 flex-wrap justify-center">
              <span className="text-navy font-bold font-serif">Trân trọng kính mời</span>{' '}
              <strong className="gold-text-gradient font-bold font-michroma px-1.5 underline decoration-gold/60">
                {guestName || '[Tên người]'}
              </strong>{' '}
              <Edit3 className="w-4.5 h-4.5 text-gold-dark inline-block align-middle ml-1 shrink-0" />
            </span>
          </div>
        </div>

        {/* Pinned Headline fixed at bottom 40px of Viewport (100% Solid Color, Separate Letter Drops) */}
        <div 
          className={`fixed bottom-[40px] left-0 right-0 w-full text-center z-30 select-none pointer-events-none px-6 sm:px-10 transition-opacity duration-150 ${
            normalizedProgress >= 0.99 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h1 
            className="font-michroma font-bold text-[#e5c158] uppercase leading-[0.82] text-center w-full block whitespace-nowrap drop-shadow-[0_4px_20px_rgba(229,193,88,0.4)]"
            style={{ fontSize: fontSize }}
          >
            {letters.map((char, index) => {
              const start = index * stepSize;
              const localProgress = Math.min(Math.max((normalizedProgress - start) / stepSize, 0), 1);
              
              // Power ease-in gravity drop curve
              const eased = Math.pow(localProgress, 2.4);
              const squish = Math.sin(localProgress * Math.PI);

              const charY = `${eased * 220}px`; // Drops 220px cleanly out of view
              const charScaleY = 1 - squish * 0.22;
              const charScaleX = 1 + squish * 0.11;

              return (
                <span
                  key={index}
                  className="inline-block transform-gpu origin-bottom transition-transform duration-50 ease-out opacity-100"
                  style={{
                    transform: `translateY(${charY}) scaleY(${charScaleY}) scaleX(${charScaleX})`,
                    willChange: 'transform'
                  }}
                >
                  {char}
                </span>
              );
            })}
          </h1>
        </div>
      </section>
    </div>
  );
}
