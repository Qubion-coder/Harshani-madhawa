import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <div className="relative w-full py-16 sm:py-24 overflow-hidden px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/ChatGPT Image Aug 17, 2026, 01_00_12 AM.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-[#fdfaf5]/40"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center"
      >
        <span className="text-[#3b2a1a] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sm sm:text-xl font-semibold font-serif mb-2" style={{ textShadow: "0 0 15px rgba(253,250,245,1), 0 0 30px rgba(253,250,245,0.8)" }}>
          Venue
        </span>
        <h2 className="text-[#3b2a1a] font-serif text-5xl sm:text-[6rem] tracking-tight leading-none uppercase mb-10 sm:mb-16 text-center" style={{ textShadow: "0 0 20px rgba(253,250,245,1), 0 0 40px rgba(253,250,245,0.8)" }}>
          Location
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full bg-white/50 backdrop-blur-md p-6 sm:p-12 rounded-[2rem] border border-[#3b2a1a]/10 shadow-md">
          
          {/* Hotel Image */}
          <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-[#3b2a1a]/10">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaylSWJDWUgESLrQxHUIfvUKuYOKVvUcG1cDSXrWCGbjcEGKJN5Bv_h0X&s=10" 
              alt="Rimakvin River Edge Resort" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Location Details */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#3b2a1a] mb-4 sm:mb-6 opacity-80" strokeWidth={1} />
            
            <h3 className="text-[#1a1005] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xl sm:text-2xl md:text-3xl font-semibold font-serif leading-tight mb-3 sm:mb-4">
              Rimakvin River Edge Resort & Banquet
            </h3>
            
            <p className="text-[#3b2a1a] tracking-[0.05em] sm:tracking-[0.1em] text-sm sm:text-base md:text-lg font-sans opacity-80 mb-8 sm:mb-10 max-w-md">
              The Grand Ballroom, Ambalangoda, Sri Lanka
            </p>

            <a 
              href="https://maps.app.goo.gl/p3EQ6zvuPjxuzbUj8?g_st=iw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-4 border border-[#3b2a1a]/30 hover:border-[#3b2a1a] rounded-full transition-all duration-300 bg-[#fdfaf5] hover:bg-[#3b2a1a] text-[#3b2a1a] hover:text-[#fdfaf5] shadow-sm group"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 transition-colors group-hover:text-[#fdfaf5]" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.15em] text-xs sm:text-sm font-semibold font-sans">
                View Live Location
              </span>
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
