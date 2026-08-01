import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import NameModal from './components/NameModal';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import EventDetails from './components/EventDetails';
import PersonalMessage from './components/PersonalMessage';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  const [guestName, setGuestName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const isSeekingRef = useRef(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    // Check URL parameters first (?guest=... or ?name=... or ?to=...)
    const urlParams = new URLSearchParams(window.location.search);
    const paramName = urlParams.get('guest') || urlParams.get('name') || urlParams.get('to');
    const storedName = paramName || localStorage.getItem('guest_name');

    if (storedName && storedName.trim()) {
      setGuestName(storedName.trim());
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  // Scroll-Driven Video Scrubbing (0s -> 6s mapped strictly from top of Section 1 to arrival at Section 2)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video renders initial frame
    video.play().then(() => {
      video.pause();
    }).catch(() => {});

    const getSection2TopOffset = () => {
      const section2Element = document.getElementById('journey-wrapper') || document.getElementById('journey');
      if (section2Element && section2Element.offsetTop > 200) {
        return section2Element.offsetTop;
      }
      return window.innerHeight;
    };

    const getSection3TopOffset = () => {
      const section3Element = document.getElementById('event');
      if (section3Element && section3Element.offsetTop > 300) {
        return section3Element.offsetTop;
      }
      return window.innerHeight * 2;
    };

    const calculateTargetTime = () => {
      if (!video || !video.duration || isNaN(video.duration)) return;
      
      const section2Top = getSection2TopOffset();
      const currentScrollY = window.scrollY || window.pageYOffset || 0;
      
      // Calculate fraction [0 -> 1] so video reaches 6s (video.duration) EXACTLY at Section 2
      const scrollFraction = Math.min(Math.max(currentScrollY / section2Top, 0), 1);
      targetTimeRef.current = scrollFraction * video.duration;

      // Video is visible during Section 1 & Section 2, fading out only after Section 3 navy background covers the view
      const section3Top = getSection3TopOffset();
      setIsVideoVisible(currentScrollY < (section3Top + window.innerHeight * 0.4));
    };

    const renderVideoFrame = () => {
      if (video && !isNaN(video.duration)) {
        if (!isSeekingRef.current && !video.seeking) {
          const diff = Math.abs(video.currentTime - targetTimeRef.current);
          if (diff > 0.02) {
            isSeekingRef.current = true;
            video.currentTime = targetTimeRef.current;
          }
        }
      }
      animationFrameRef.current = requestAnimationFrame(renderVideoFrame);
    };

    const handleSeeking = () => {
      isSeekingRef.current = true;
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
      if (video && Math.abs(video.currentTime - targetTimeRef.current) > 0.04) {
        video.currentTime = targetTimeRef.current;
      }
    };

    const handleScroll = () => {
      calculateTargetTime();
    };

    video.addEventListener('seeking', handleSeeking);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('loadedmetadata', calculateTargetTime);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateTargetTime);

    // Initial calculation
    calculateTargetTime();
    setTimeout(calculateTargetTime, 100);

    // Start RAF loop
    animationFrameRef.current = requestAnimationFrame(renderVideoFrame);

    return () => {
      video.removeEventListener('seeking', handleSeeking);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('loadedmetadata', calculateTargetTime);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateTargetTime);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleNameSubmit = (name) => {
    setGuestName(name);
    localStorage.setItem('guest_name', name);
    setIsModalOpen(false);
  };

  const handleEditName = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen text-navy font-sans flex flex-col w-full overflow-x-hidden bg-transparent">
      {/* 3D Graduate Character Background Video */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className={`fixed inset-0 w-full h-full object-cover -z-50 pointer-events-none transform-gpu transition-opacity duration-500 ${
          isVideoVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source 
          src="https://res.cloudinary.com/dssih4fhl/video/upload/v1785570090/Graduate_character_6s_zerwx9.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Name Input Modal */}
      <NameModal 
        isOpen={isModalOpen} 
        onSubmitName={handleNameSubmit} 
        initialValue={guestName} 
      />

      {/* Navigation Header */}
      <Header />

      {/* Main Graduation Invitation Content */}
      <main className="flex-grow w-full bg-transparent">
        {/* Section 1 & Section 2 (Transparent background) */}
        <HeroSection guestName={guestName} onEditName={handleEditName} />
        <JourneySection guestName={guestName} onEditName={handleEditName} />

        {/* Sections 3, 4 & 5 (starting from Section 3 #event) */}
        <div className="bg-transparent text-white">
          <EventDetails />
          <PersonalMessage />
          <LocationSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
