import React from 'react';
import { Calendar, Clock, MapPin, Navigation, ShieldCheck } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="event" className="w-full min-h-screen py-24 px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col justify-center items-center relative overflow-hidden bg-transparent">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1320px] mx-auto w-full space-y-12">
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

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Hero Card: Date (Span 7) */}
          <div className="md:col-span-7 dark-glass-card p-8 sm:p-10 lg:p-12 rounded-3xl border border-gold/30 shadow-2xl relative overflow-hidden group hover:border-gold/60 transition-all duration-500 flex flex-col justify-between min-h-[320px]">
            {/* Background subtle pattern or glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-700 pointer-events-none" />
            
            <div className="flex items-center justify-between z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
                <Calendar className="w-4 h-4 text-gold" /> Ngày Diễn Ra
              </div>
              <span className="font-michroma text-xs text-gold/80 uppercase tracking-widest">YEAR 2024</span>
            </div>

            <div className="my-8 z-10">
              <div className="font-michroma text-xs uppercase tracking-[0.3em] text-white/60 mb-2 font-bold">Thứ Bảy</div>
              <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-none">
                15 <span className="gold-text-gradient font-sans font-light">/</span> 06 <span className="gold-text-gradient font-sans font-light">/</span> 2024
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gold/20 z-10 text-white/80 text-xs sm:text-sm">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold" /> Sự kiện chính thức
              </span>
              <span className="text-gold font-bold font-michroma">10:00 AM — 12:00 PM</span>
            </div>
          </div>

          {/* Time & Schedule Card (Span 5) */}
          <div className="md:col-span-5 dark-glass-card p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-2xl relative overflow-hidden group hover:border-gold/60 transition-all duration-500 flex flex-col justify-between">
            <div className="flex items-center justify-between z-10 mb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest">
                <Clock className="w-4 h-4 text-gold" /> Thời Gian
              </div>
            </div>

            <div className="space-y-4 my-auto z-10">
              <div className="font-serif text-4xl sm:text-5xl text-white font-bold">
                10:00 <span className="text-gold text-2xl font-sans uppercase">AM</span>
              </div>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Vui lòng có mặt trước <strong className="text-gold font-semibold">15 phút</strong> để làm thủ tục check-in và ổn định vị trí chỗ ngồi.
              </p>
            </div>

            <div className="pt-6 border-t border-gold/20 z-10 flex items-center justify-between text-xs text-white/60">
              <span>Thời lượng lễ: ~2 tiếng</span>
              <span className="text-gold font-semibold">Mở cửa đón khách từ 09:30 AM</span>
            </div>
          </div>

          {/* Venue Location Card (Full Width Span 12) */}
          <div className="md:col-span-12 dark-glass-card p-8 sm:p-10 lg:p-12 rounded-3xl border border-gold/30 shadow-2xl relative overflow-hidden group hover:border-gold/60 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3 z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-semibold uppercase tracking-widest border border-gold/20">
                <MapPin className="w-4 h-4 text-gold" /> Địa Điểm Buổi Lễ
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                Hội trường Lớn — <span className="gold-text-gradient">Đại học Bách Khoa</span>
              </h3>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Địa điểm chính diễn ra lễ trao bằng. Bãi đậu xe máy &amp; ô tô nằm tại Cổng A1 &amp; A2 với bảng chỉ dẫn vào hội trường.
              </p>
            </div>

            <a
              href="#map"
              className="shrink-0 z-10 px-8 py-4 rounded-full bg-gold text-navy font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:shadow-gold/30 transition-all duration-300 flex items-center gap-2.5"
            >
              <Navigation className="w-4.5 h-4.5" /> Xem Bản Đồ
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
