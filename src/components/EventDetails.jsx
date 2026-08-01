import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="event" className="w-full min-h-screen bg-transparent px-4 sm:px-8 lg:px-12 xl:px-16 py-20 flex flex-col justify-center items-center relative">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-4 gold-shadow">
            <Sparkles className="w-4 h-4 text-gold" /> Section 3 — Thông Tin Buổi Lễ
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy font-bold">Thông Tin Buổi Lễ</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Date Card */}
          <div className="glass-card p-8 sm:p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-3xl border border-gold/30 group">
            <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform gold-shadow">
              <Calendar className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-navy/70 font-bold mb-3">Ngày Diễn Ra</h3>
            <p className="font-serif text-2xl sm:text-3xl text-navy font-bold">Thứ Bảy, 15/06/2024</p>
          </div>

          {/* Time Card */}
          <div className="glass-card p-8 sm:p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-3xl border border-gold/30 group">
            <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform gold-shadow">
              <Clock className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-navy/70 font-bold mb-3">Thời Gian</h3>
            <p className="font-serif text-2xl sm:text-3xl text-navy font-bold">10:00 AM</p>
          </div>

          {/* Venue Card */}
          <div className="glass-card p-8 sm:p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 sm:col-span-2 md:col-span-1 rounded-3xl border border-gold/30 group">
            <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform gold-shadow">
              <MapPin className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-navy/70 font-bold mb-3">Địa Điểm</h3>
            <p className="font-serif text-2xl sm:text-3xl text-navy font-bold leading-tight">
              Hội trường Lớn<br />
              <span className="text-lg text-navy/70 font-normal">Đại học Bách Khoa</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
