import React, { useState, useEffect } from 'react';
import { CheckCircle2, Send, Users, User, MessageSquare, CheckSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RSVPForm({ guestName }) {
  const [name, setName] = useState(guestName || '');
  const [guestCount, setGuestCount] = useState('01 Người');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (guestName) {
      setName(guestName);
    }
  }, [guestName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Trigger celebration confetti burst!
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F4E8C1', '#C5A059', '#000A1E']
    });
  };

  return (
    <section id="rsvp" className="w-full min-h-screen px-4 sm:px-8 lg:px-12 py-20 bg-transparent text-white relative flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-2xl lg:max-w-3xl mx-auto p-8 sm:p-12 lg:p-16 relative w-full dark-glass-card rounded-3xl shadow-2xl border border-gold/30">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3 gold-shadow">
            <CheckSquare className="w-4 h-4 text-gold" /> Section 4 — Xác Nhận Tham Dự
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-white">Xác Nhận Tham Dự</h2>
        </div>

        <p className="text-base sm:text-lg text-white/70 text-center mb-10 leading-relaxed">
          Vui lòng phản hồi trước ngày 05/06/2024 để tôi có thể chuẩn bị đón tiếp tốt nhất.
        </p>
        
        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto border border-gold/40 gold-shadow">
              <CheckCircle2 className="w-10 h-10 text-gold" />
            </div>
            <h3 className="font-serif text-3xl text-white font-bold">Cảm ơn {name || 'bạn'}!</h3>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg mx-auto">
              Phản hồi xác nhận tham dự ({guestCount}) của bạn đã được gửi thành công. Trần Huỳnh Hoa Giáp rất hân hạnh được đón tiếp bạn tại buổi lễ!
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-8 py-3 bg-gold/20 hover:bg-gold text-white hover:text-navy font-semibold text-xs uppercase tracking-widest transition-all rounded-full border border-gold/40"
            >
              Gửi phản hồi khác
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-gold font-semibold mb-2">
                <User className="w-4 h-4" /> Họ và Tên
              </label>
              <input 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn..." 
                className="w-full bg-navy-surface/80 border-0 border-b-2 border-gold/30 focus:ring-0 focus:border-gold text-white text-lg py-3 transition-colors placeholder:text-white/30"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-gold font-semibold mb-2">
                <Users className="w-4 h-4" /> Số lượng người tham dự
              </label>
              <select 
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full bg-navy border-0 border-b-2 border-gold/30 focus:ring-0 focus:border-gold text-white text-lg py-3 transition-colors"
              >
                <option className="text-navy bg-white">01 Người</option>
                <option className="text-navy bg-white">02 Người</option>
                <option className="text-navy bg-white">Đi cùng gia đình (3+ người)</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider text-gold font-semibold mb-2">
                <MessageSquare className="w-4 h-4" /> Lời nhắn / Lời chúc
              </label>
              <textarea 
                rows="2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Viết vài lời nhắn gửi..." 
                className="w-full bg-navy-surface/80 border-0 border-b-2 border-gold/30 focus:ring-0 focus:border-gold text-white text-lg py-3 transition-colors resize-none placeholder:text-white/30"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-gold via-gold-bright to-gold-dark text-navy text-xs sm:text-sm uppercase tracking-widest font-bold hover:brightness-110 transition-all rounded-full shadow-lg mt-6 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              GỬI XÁC NHẬN (RSVP)
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
