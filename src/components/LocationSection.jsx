import React from 'react';
import { MapPin, Navigation, Car, Building2 } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-24 max-w-[1400px] mx-auto" id="map">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold block mb-2">Navigation</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy font-bold mb-6">Chỉ Đường Đến Buổi Lễ</h2>
          <p className="text-lg sm:text-xl text-navy/70 mb-10 leading-relaxed">
            Buổi lễ sẽ được tổ chức trang trọng tại Hội trường Lớn của Đại học Bách Khoa. Vui lòng gửi xe tại Cổng chính và di chuyển theo bảng chỉ dẫn.
          </p>
          
          <div className="glass-card p-8 space-y-8 rounded-2xl border border-gold/25 shadow-lg">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                <Car className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-serif font-bold text-navy text-lg sm:text-xl mb-1">Bãi đậu xe (Parking)</p>
                <p className="text-navy/70 text-base sm:text-lg">Vui lòng gửi xe tại khu vực được đánh dấu trên bản đồ (Cổng A1 &amp; A2).</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-serif font-bold text-navy text-lg sm:text-xl mb-1">Hội trường Lớn (Grand Hall)</p>
                <p className="text-navy/70 text-base sm:text-lg">Địa điểm chính của buổi lễ, nằm tại trung tâm khuôn viên.</p>
              </div>
            </div>
            
            <a 
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-navy text-white font-sans text-xs sm:text-sm uppercase tracking-widest font-semibold hover:bg-gold hover:text-navy transition-all rounded-full shadow-md hover:shadow-gold/20" 
              href="https://maps.app.goo.gl/iz6MnGgkRiNVLGdMA" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Navigation className="w-4 h-4 text-gold" />
              XEM TRÊN GOOGLE MAPS
            </a>
          </div>
        </div>

        {/* Map Display Image */}
        <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden rounded-2xl shadow-2xl border border-gold/30">
          <img 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
            alt="Bản đồ khuôn viên trường" 
            src="https://res.cloudinary.com/dssih4fhl/image/upload/v1785592964/B%C3%A3i_%C4%91%E1%BA%ADu_xe_ky5znk.png" 
          />
        </div>
      </div>
    </section>
  );
}
