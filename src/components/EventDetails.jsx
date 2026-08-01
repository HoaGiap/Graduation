import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Navigation } from 'lucide-react';

export default function EventDetails() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const cardsData = [
    {
      id: 'date',
      icon: <Calendar className="w-5 h-5 text-gold" />,
      tags: ['Thứ Bảy', '15/06/2024', 'Chính Thức', 'Trọng Đại'],
      title: '15 / 06 / 2024',
      body: 'Lễ tốt nghiệp đại học chính thức được tổ chức trang trọng nhân cột mốc trưởng thành đáng nhớ.',
    },
    {
      id: 'time',
      icon: <Clock className="w-5 h-5 text-gold" />,
      tags: ['10:00 AM', 'Đón Khách 09:30', 'Thời Lượng ~2H', 'Đúng Giờ'],
      title: '10:00 AM',
      body: 'Thời gian cử hành lễ kéo dài khoảng 2 tiếng. Hội trường mở cửa đón khách và check-in từ 09:30 AM.',
    },
    {
      id: 'location',
      icon: <MapPin className="w-5 h-5 text-gold" />,
      tags: ['Hội Trường Lớn', 'ĐH Bách Khoa', 'Bãi Xe A1-A2', 'Chỉ Đường'],
      title: 'Hội Trường Lớn',
      body: 'Buổi lễ diễn ra tại trung tâm khuôn viên. Gửi xe tại Cổng A1 & A2 và di chuyển theo biển hướng dẫn.',
      hasMapAction: true
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Smooth scroll progress: 0 when top enters bottom of screen, 1 when inside screen
        const startThreshold = windowHeight * 0.9;
        const endThreshold = windowHeight * 0.25;
        const rawProgress = (startThreshold - rect.top) / (startThreshold - endThreshold);
        const progress = Math.min(Math.max(rawProgress, 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = scrollProgress;
  const translateY = (1 - scrollProgress) * 50;
  const blur = (1 - scrollProgress) * 12;

  return (
    <section 
      ref={sectionRef}
      id="event" 
      className="w-full min-h-screen bg-black relative overflow-hidden text-white flex flex-col justify-between font-barlow transition-all duration-200 ease-out"
      style={{
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
        filter: `blur(${blur}px)`,
        willChange: 'opacity, transform, filter'
      }}
    >
      {/* 1. Raw full-bleed background GIF (không lớp phủ, không mờ) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <img 
          src="https://res.cloudinary.com/dssih4fhl/image/upload/v1785587925/anime_stickers_for_discord_4_Cats_Memes_GIF_-_Cats_Cat_Memes_-_Descubrir_y_compartir_GIFs_a5lhk1.gif" 
          alt="Section 3 Background Animation"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* 2. Nội dung chính với font Barlow (z-10, px-8 md:px-16 lg:px-20, pt-24 pb-16) */}
      <div className="z-10 px-8 md:px-16 lg:px-20 pt-24 pb-16 flex flex-col justify-between min-h-screen max-w-[1440px] mx-auto w-full font-barlow">
        
        {/* Header Block */}
        <div className="space-y-4 max-w-4xl">
          {/* Kicker */}
          <div className="text-sm text-gold-light font-barlow uppercase tracking-[0.25em] font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            // CEREMONY DETAILS
          </div>
          
          {/* Heading */}
          <h2 className="font-instrument italic font-normal text-6xl md:text-7xl lg:text-[6rem] tracking-tight text-white leading-[1.15] pt-2 pb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Thông Tin <br />
            <span className="gold-text-gradient font-instrument italic inline-block pr-6 pt-2 pb-2 drop-shadow-md">Buổi Lễ</span>
          </h2>
        </div>

        {/* 3. Ba Card Liquid Glass Trong Suốt Nguyên Bản */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 items-stretch w-full">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-500 relative font-barlow"
            >
              {/* Hàng trên: Icon 44x44 (liquid-glass square) + 4 pill tags trong suốt */}
              <div className="flex items-start justify-between gap-3 mb-6">
                {/* Icon square 44x44 (11x4 = 44px) */}
                <div className="w-11 h-11 shrink-0 rounded-xl liquid-glass flex items-center justify-center shadow-inner">
                  {card.icon}
                </div>

                {/* 4 Pill Tags trong suốt glassmorphism với bóng chữ sắc nét */}
                <div className="flex flex-wrap gap-1.5 justify-end max-w-[68%]">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium font-barlow text-white bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dưới: Title + Body text với bóng chữ chống chói nền */}
              <div className="space-y-3 mt-auto">
                <h3 className="font-instrument italic text-3xl md:text-4xl text-white font-normal tracking-tight leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] drop-shadow-[0_0_12px_rgba(0,0,0,0.9)]">
                  {card.title}
                </h3>
                
                <p className="text-sm font-barlow text-white/90 leading-relaxed max-w-[32ch] drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] drop-shadow-[0_0_8px_rgba(0,0,0,0.85)]">
                  {card.body}
                </p>

                {card.hasMapAction && (
                  <div className="pt-4">
                    <a
                      href="#map"
                      className="font-barlow inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold text-navy font-bold text-xs uppercase tracking-widest hover:bg-white hover:shadow-gold/50 transition-all duration-300 shadow-md"
                    >
                      <Navigation className="w-3.5 h-3.5" /> Xem Bản Đồ
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
