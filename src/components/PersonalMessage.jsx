import React, { useState, useEffect } from 'react';
import { Quote, Clock } from 'lucide-react';

export default function PersonalMessage() {
  const targetDate = new Date('2024-06-15T10:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="message" className="w-full min-h-screen px-4 sm:px-8 lg:px-12 py-20 flex flex-col justify-center items-center text-center max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-8 gold-shadow">
        <Clock className="w-4 h-4 text-gold" /> Section 2 — Thư Cảm Ơn & Đếm Ngược
      </div>

      {/* Countdown Timer */}
      <div className="w-full max-w-2xl mx-auto mb-14">
        <h3 className="text-xs uppercase tracking-[0.25em] text-navy/70 font-bold mb-6">Đếm Ngược Đến Ngày Diễn Ra Buổi Lễ</h3>
        <div className="grid grid-cols-4 gap-3 sm:gap-6">
          <div className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-gold/30 shadow-lg">
            <span className="font-serif text-3xl sm:text-5xl font-bold text-navy">{timeLeft.days}</span>
            <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-navy/60 font-semibold mt-1">Ngày</span>
          </div>
          <div className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-gold/30 shadow-lg">
            <span className="font-serif text-3xl sm:text-5xl font-bold text-navy">{timeLeft.hours}</span>
            <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-navy/60 font-semibold mt-1">Giờ</span>
          </div>
          <div className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-gold/30 shadow-lg">
            <span className="font-serif text-3xl sm:text-5xl font-bold text-navy">{timeLeft.minutes}</span>
            <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-navy/60 font-semibold mt-1">Phút</span>
          </div>
          <div className="glass-card p-4 sm:p-6 rounded-2xl text-center border border-gold/30 shadow-lg">
            <span className="font-serif text-3xl sm:text-5xl font-bold text-navy">{timeLeft.seconds}</span>
            <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-navy/60 font-semibold mt-1">Giây</span>
          </div>
        </div>
      </div>

      {/* Thank You Quote */}
      <div className="w-full max-w-4xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border border-gold/30 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6 border border-gold/30 gold-shadow">
          <Quote className="w-8 h-8 text-gold" />
        </div>
        <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl text-navy italic mb-8 leading-relaxed font-semibold">
          "Hành trình bốn năm qua sẽ không thể trọn vẹn nếu thiếu đi sự ủng hộ và yêu thương từ gia đình và bạn bè. Cảm ơn mọi người đã luôn đồng hành cùng tôi."
        </blockquote>
        <div className="inline-block px-6 py-2 rounded-full bg-gold/10 text-gold-dark font-sans text-xs uppercase tracking-[0.3em] font-bold border border-gold/30">
          — TRÂN TRỌNG —
        </div>
      </div>
    </section>
  );
}
