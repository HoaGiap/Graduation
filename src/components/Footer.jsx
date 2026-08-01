import React from "react";
import { Award, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-8 lg:px-12 bg-navy text-white border-t border-gold/20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <a href="#" className="flex items-center gap-2.5">
          <Award className="w-6 h-6 text-gold" />
          <span className="font-michroma text-xl font-bold tracking-wider text-white">
            COMMENCEMENT{" "}
            <span className="gold-text-gradient font-michroma">2026</span>
          </span>
        </a>

        <p className="font-sans text-sm text-white/70 flex items-center justify-center gap-1">
          © 2026 Trần Huỳnh Hoa Giáp. Crafted with{" "}
          <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" /> for
          Graduation.
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          <a
            className="text-white/70 hover:text-gold transition-colors"
            href="#event"
          >
            Sự Kiện
          </a>
          <a
            className="text-white/70 hover:text-gold transition-colors"
            href="#rsvp"
          >
            RSVP
          </a>
          <a
            className="text-white/70 hover:text-gold transition-colors"
            href="#map"
          >
            Bản Đồ
          </a>
        </div>
      </div>
    </footer>
  );
}
