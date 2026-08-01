import React, { useState } from 'react';
import { Mail, Sparkles, Send } from 'lucide-react';

export default function NameModal({ isOpen, onSubmitName, initialValue = '' }) {
  const [inputValue, setInputValue] = useState(initialValue);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue && inputValue.trim()) {
      onSubmitName(inputValue.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-navy/80 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="dark-glass-card p-6 sm:p-10 max-w-md w-full text-center relative shadow-2xl rounded-2xl border border-gold/40 text-white">
        <div className="w-16 h-16 bg-gold/15 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/30 gold-shadow">
          <Mail className="w-8 h-8 text-gold" />
        </div>
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs uppercase tracking-widest font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Thư Mời Tốt Nghiệp
        </div>
        
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold mb-1">
          Trần Huỳnh Hoa Giáp
        </h3>
        
        <p className="text-sm text-white/70 mb-6 leading-relaxed">
          Vui lòng nhập tên của bạn để mở thiệp mời và nhận lời mời trang trọng:
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input 
              type="text" 
              required 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Nhập tên của bạn (Ví dụ: Anh Tuấn)..." 
              className="w-full px-5 py-3.5 bg-navy-surface/80 border border-gold/40 focus:border-gold focus:ring-2 focus:ring-gold/30 text-white font-sans text-base rounded-xl transition-all text-center placeholder:text-white/40 shadow-inner"
              autoFocus
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3.5 bg-gradient-to-r from-gold via-gold-bright to-gold-dark text-navy font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all rounded-xl shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            MỞ THIỆP MỜI
          </button>
        </form>
      </div>
    </div>
  );
}
