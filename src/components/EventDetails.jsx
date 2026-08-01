import React from 'react';
import { Calendar, Clock, MapPin, Navigation, ShieldCheck, Sparkles } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="event" className="w-full min-h-screen py-24 sm:py-32 px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-center relative overflow-hidden bg-transparent">
      {/* Ambient background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1280px] mx-auto w-full space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] text-gold font-bold font-michroma block">
            — CEREMONY DETAILS —
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-tight">
            Thông Tin <span className="gold-text-gradient italic font-serif">Buổi Lễ</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-sans max-w-xl mx-auto leading-relaxed">
            Chi tiết thời gian, ngày diễn ra và địa điểm được tổ chức trang trọng.
          </p>
        </div>

        {/* 3-Card Staggered Layout (Không viền - Borderless Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-6 md:pt-10 pb-6">
          
          {/* Card 1 (Left - Shifted Down): THỜI GIAN */}
          <div className="transform-gpu md:translate-y-6 dark-glass-card p-8 sm:p-10 rounded-[32px] border-none shadow-2xl relative overflow-hidden group transition-all duration-500 flex flex-col justify-between hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-700 pointer-events-none" />
            
            <div>
              {/* Top Card Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-widest mb-8 border-none">
                <Clock className="w-4 h-4 text-gold" /> Thời Gian
              </div>

              {/* Card Main Body */}
              <div className="space-y-3">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  10:00 <span className="gold-text-gradient font-sans text-2xl uppercase font-semibold">AM</span>
                </div>
                <p className="text-white/80 font-serif text-lg font-semibold">
                  Mở cửa đón khách: <span className="text-gold">09:30 AM</span>
                </p>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Vui lòng có mặt trước 15 phút để làm thủ tục check-in và ổn định vị trí chỗ ngồi.
                </p>
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="pt-6 mt-8 border-none flex items-center justify-between text-xs text-white/60">
              <span>Thời lượng: ~2 tiếng</span>
              <span className="text-gold font-semibold font-michroma">Check-in</span>
            </div>
          </div>

          {/* Card 2 (Center - Elevated Up & Highlighted Hero Card): NGÀY DIỄN RA */}
          <div className="transform-gpu md:-translate-y-6 z-20 dark-glass-card p-8 sm:p-10 rounded-[32px] border-none shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-500 flex flex-col justify-between bg-gradient-to-b from-navy-surface via-navy-surface to-navy-surface/90">
            <div className="absolute -top-10 -right-10 w-56 h-56 bg-gold/20 rounded-full blur-3xl group-hover:bg-gold/30 transition-all duration-700 pointer-events-none" />

            <div>
              {/* Top Hero Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold text-navy text-xs font-bold uppercase tracking-widest shadow-md border-none">
                  <Sparkles className="w-4 h-4 text-navy fill-navy" /> Ngày Trọng Đại
                </div>
                <span className="font-michroma text-xs text-gold font-bold uppercase tracking-widest">YEAR 2024</span>
              </div>

              {/* Card Hero Content */}
              <div className="space-y-4 my-2">
                <span className="font-michroma text-xs uppercase tracking-[0.3em] text-gold font-bold block">
                  THỨ BẢY / SATURDAY
                </span>
                <div className="font-serif text-5xl sm:text-6xl font-bold text-white tracking-tight leading-none">
                  15 <span className="gold-text-gradient font-sans font-light">/</span> 06
                </div>
                <div className="font-serif text-3xl sm:text-4xl text-gold font-bold">
                  2024
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed pt-2">
                  Lễ tốt nghiệp đại học chính thức đánh dấu mốc trưởng thành đáng nhớ.
                </p>
              </div>
            </div>

            {/* Bottom Footer Info */}
            <div className="pt-6 mt-8 border-none flex items-center justify-between text-xs text-white">
              <span className="flex items-center gap-1.5 text-gold font-semibold">
                <ShieldCheck className="w-4 h-4" /> Lễ trao bằng
              </span>
              <span className="font-michroma text-gold font-bold">15.06.2024</span>
            </div>
          </div>

          {/* Card 3 (Right - Shifted Down): ĐỊA ĐIỂM */}
          <div className="transform-gpu md:translate-y-6 dark-glass-card p-8 sm:p-10 rounded-[32px] border-none shadow-2xl relative overflow-hidden group transition-all duration-500 flex flex-col justify-between hover:-translate-y-1">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-700 pointer-events-none" />

            <div>
              {/* Top Card Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-widest mb-8 border-none">
                <MapPin className="w-4 h-4 text-gold" /> Địa Điểm
              </div>

              {/* Card Main Body */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Hội trường Lớn
                </h3>
                <p className="text-gold font-serif text-lg font-bold">
                  Đại học Bách Khoa
                </p>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Gửi xe tại Cổng A1 &amp; A2 với sơ đồ bảng chỉ dẫn trực tiếp tới vị trí hội trường.
                </p>
              </div>
            </div>

            {/* Bottom Footer Action */}
            <div className="pt-6 mt-8 border-none">
              <a
                href="#map"
                className="w-full py-3 px-4 rounded-full bg-gold text-navy font-bold text-xs uppercase tracking-widest hover:bg-white hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center gap-2 border-none"
              >
                <Navigation className="w-4 h-4" /> Xem Bản Đồ Chỉ Đường
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
