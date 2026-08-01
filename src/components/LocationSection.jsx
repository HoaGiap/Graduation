import React from 'react';
import { MapPin, Navigation, Car, Building2 } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 max-w-[1400px] mx-auto" id="map">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">// Navigation</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-6">Chỉ Đường Đến Buổi Lễ</h2>
          <p className="text-base sm:text-lg text-white/80 mb-10 leading-relaxed font-barlow">
            Buổi lễ được tổ chức trang trọng tại <strong className="text-gold font-semibold">Hội trường Khu D</strong>. Quý khách vui lòng gửi xe tại bãi đậu xe và di chuyển theo tuyến đường chỉ dẫn từ cổng vào.
          </p>
          
          <div className="liquid-glass p-6 sm:p-8 space-y-6 rounded-2xl border border-gold/30 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0 text-gold shadow-md">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <p className="font-barlow font-bold text-white text-lg sm:text-xl mb-1">Bãi Đậu Xe</p>
                <p className="text-white/80 text-sm sm:text-base leading-normal font-barlow">Vui lòng gửi xe tại khu vực bãi đậu xe được đánh dấu vị trí trên sơ đồ.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0 text-gold shadow-md">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-barlow font-bold text-white text-lg sm:text-xl mb-1">Hội Trường Khu D</p>
                <p className="text-white/80 text-sm sm:text-base leading-normal font-barlow">Địa điểm chính cử hành lễ tốt nghiệp và trao bằng.</p>
              </div>
            </div>
            
            <div className="pt-2">
              <a 
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-gold text-navy font-barlow text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-white hover:shadow-gold/30 transition-all rounded-full shadow-lg" 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Navigation className="w-4 h-4 text-navy" />
                MỞ TRÊN GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>

        {/* Sơ Đồ Chỉ Đường Khuôn Viên Trường (Campus Map Image) */}
        <div className="relative h-[360px] sm:h-[460px] lg:h-[520px] w-full overflow-hidden rounded-2xl shadow-2xl border border-gold/40 liquid-glass p-2">
          <img 
            className="w-full h-full object-contain rounded-xl transform hover:scale-[1.02] transition-transform duration-500" 
            alt="Sơ đồ chỉ đường lối vào Hội trường Khu D và Bãi đậu xe" 
            src="/campus-map.png" 
          />
        </div>
      </div>
    </section>
  );
}
