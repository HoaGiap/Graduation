import React from 'react';
import { Calendar, Clock, MapPin, Navigation, ShieldCheck } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="event" className="w-full min-h-screen py-24 px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-center relative overflow-hidden bg-transparent">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-[1100px] mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] text-gold font-bold font-michroma block">
            — CEREMONY DETAILS —
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-tight">
            Thông Tin <span className="gold-text-gradient italic font-serif">Buổi Lễ</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-sans max-w-xl mx-auto leading-relaxed">
            Mọi thông tin chi tiết về thời gian, địa điểm và chương trình lễ tốt nghiệp được cập nhật đầy đủ dưới đây.
          </p>
        </div>

        {/* Vertical Staggered Cards (3 Thẻ nằm dọc & so le) */}
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12 w-full">
          
          {/* Card 1: Ngày Diễn Ra (So le bên trái - Offset Left) */}
          <div className="w-full md:w-[88%] lg:w-[82%] ml-0 mr-auto dark-glass-card p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-2xl relative overflow-hidden group hover:border-gold/60 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-700 pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 z-10 relative">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
                  <Calendar className="w-4 h-4 text-gold" /> 01. Ngày Diễn Ra
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Thứ Bảy, <span className="gold-text-gradient">15 / 06 / 2024</span>
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Buổi lễ tốt nghiệp chính thức được tổ chức trang trọng nhân cột mốc trưởng thành quan trọng.
                </p>
              </div>

              <div className="shrink-0 flex sm:flex-col items-start sm:items-end justify-between border-t sm:border-t-0 sm:border-l border-gold/20 pt-4 sm:pt-0 sm:pl-8 text-white/80">
                <span className="font-michroma text-xs text-gold/80 uppercase tracking-widest block">YEAR 2024</span>
                <span className="flex items-center gap-1.5 text-xs text-gold font-semibold mt-2">
                  <ShieldCheck className="w-4 h-4" /> Chính thức
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Thời Gian (So le bên phải - Offset Right) */}
          <div className="w-full md:w-[88%] lg:w-[82%] ml-auto mr-0 dark-glass-card p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-2xl relative overflow-hidden group hover:border-gold/60 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-700 pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 z-10 relative">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
                  <Clock className="w-4 h-4 text-gold" /> 02. Thời Gian Buổi Lễ
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  10:00 <span className="gold-text-gradient">AM</span>
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Thời gian diễn ra lễ trao bằng kéo dài khoảng 2 tiếng. Mở cửa đón khách từ 09:30 AM (vui lòng tới trước 15 phút).
                </p>
              </div>

              <div className="shrink-0 flex sm:flex-col items-start sm:items-end justify-between border-t sm:border-t-0 sm:border-l border-gold/20 pt-4 sm:pt-0 sm:pl-8 text-white/80">
                <span className="font-michroma text-xs text-gold font-bold uppercase tracking-widest block">09:30 AM</span>
                <span className="text-xs text-white/60 mt-2">Mở cửa đón khách</span>
              </div>
            </div>
          </div>

          {/* Card 3: Địa Điểm (So le bên trái - Offset Left) */}
          <div className="w-full md:w-[88%] lg:w-[82%] ml-0 mr-auto dark-glass-card p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-2xl relative overflow-hidden group hover:border-gold/60 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-700 pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 z-10 relative">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
                  <MapPin className="w-4 h-4 text-gold" /> 03. Địa Điểm Tổ Chức
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                  Hội trường Lớn — <span className="gold-text-gradient">Đại học Bách Khoa</span>
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Bãi đậu xe máy &amp; ô tô nằm tại Cổng A1 &amp; A2 với bảng hướng dẫn di chuyển trực tiếp tới vị trí hội trường.
                </p>
              </div>

              <a
                href="#map"
                className="shrink-0 z-10 px-8 py-4 rounded-full bg-gold text-navy font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:shadow-gold/30 transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <Navigation className="w-4 h-4" /> Xem Bản Đồ
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
