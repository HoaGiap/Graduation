import React, { useState, useEffect, useRef } from 'react';
import { Award, Menu, X, Home, Compass, MessageSquareQuote, Calendar, CheckSquare } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset || 0;
      
      // Check if scrolled past top threshold (50px)
      if (currentScrollY > 50) {
        setIsScrolled(true);
        // Scroll down hides, scroll up shows (with 5px delta buffer)
        if (currentScrollY > lastScrollY.current + 5) {
          setIsVisible(false);
          setIsMobileMenuOpen(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          setIsVisible(true);
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform-gpu ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled 
          ? 'bg-cream/85 backdrop-blur-md shadow-md border-b border-gold/15' 
          : 'bg-transparent shadow-none'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Brand Name: Aligned flush to far left */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <Award className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
          <span className="font-michroma text-base sm:text-lg font-bold tracking-wider text-navy">
            COMMENCEMENT <span className="gold-text-gradient font-michroma">2024</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
          <a className="text-xs sm:text-sm uppercase tracking-widest text-navy/80 hover:text-gold font-bold transition-colors flex items-center gap-1.5" href="#hero">
            <Home className="w-4 h-4 text-gold/80" />
            Thiệp Mời
          </a>
          <a className="text-xs sm:text-sm uppercase tracking-widest text-navy/80 hover:text-gold font-bold transition-colors flex items-center gap-1.5" href="#journey">
            <Compass className="w-4 h-4 text-gold/80" />
            Hành Trình
          </a>
          <a className="text-xs sm:text-sm uppercase tracking-widest text-navy/80 hover:text-gold font-bold transition-colors flex items-center gap-1.5" href="#message">
            <MessageSquareQuote className="w-4 h-4 text-gold/80" />
            Thư Cảm Ơn
          </a>
          <a className="text-xs sm:text-sm uppercase tracking-widest text-navy/80 hover:text-gold font-bold transition-colors flex items-center gap-1.5" href="#event">
            <Calendar className="w-4 h-4 text-gold/80" />
            Thông Tin
          </a>
          <a className="text-xs sm:text-sm uppercase tracking-widest text-navy/80 hover:text-gold font-bold transition-colors flex items-center gap-1.5" href="#rsvp">
            <CheckSquare className="w-4 h-4 text-gold/80" />
            RSVP & Bản Đồ
          </a>
        </nav>
        
        <div className="flex items-center gap-3 shrink-0">
          <a className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-navy text-white text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gold hover:text-navy transition-all shadow-md hover:shadow-gold/20" href="#rsvp">
            RSVP NGAY
          </a>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 text-navy hover:text-gold focus:outline-none transition-colors"
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-lg px-6 py-4 space-y-3 shadow-xl border-b border-gold/20">
          <a onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm uppercase tracking-wider text-navy/80 hover:text-gold py-2 font-medium" href="#hero">
            <Home className="w-4 h-4 text-gold" /> Thiệp Mời
          </a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm uppercase tracking-wider text-navy/80 hover:text-gold py-2 font-medium" href="#journey">
            <Compass className="w-4 h-4 text-gold" /> Hành Trình
          </a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm uppercase tracking-wider text-navy/80 hover:text-gold py-2 font-medium" href="#message">
            <MessageSquareQuote className="w-4 h-4 text-gold" /> Thư Cảm Ơn
          </a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm uppercase tracking-wider text-navy/80 hover:text-gold py-2 font-medium" href="#event">
            <Calendar className="w-4 h-4 text-gold" /> Thông Tin
          </a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-sm uppercase tracking-wider text-navy/80 hover:text-gold py-2 font-medium" href="#rsvp">
            <CheckSquare className="w-4 h-4 text-gold" /> RSVP & Bản Đồ
          </a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center py-3 bg-navy text-white text-xs uppercase tracking-widest rounded-full font-semibold mt-3" href="#rsvp">
            RSVP NGAY
          </a>
        </div>
      )}
    </header>
  );
}

