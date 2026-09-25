import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

export const SacredUnion: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-[#fdfaf5] overflow-hidden">
      <div 
        className="relative w-full max-w-[862px] aspect-[862/1824]"
        style={{
          backgroundImage: `url('/ChatGPT Image Sep 24, 2026, 10_33_37 PM.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-[18%] left-0 w-full text-center flex flex-col items-center px-[10%]"
        >
          <span className="text-[#3b2a1a] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-sm sm:text-[20px] md:text-[24px] font-semibold font-serif mb-1 sm:mb-0 drop-shadow-sm">
            The Sacred
          </span>
          <h2 className="text-[#3b2a1a] font-serif text-5xl sm:text-[6rem] md:text-[7rem] tracking-tight leading-none uppercase mb-4 sm:mb-8 drop-shadow-sm">
            Union
          </h2>

          <span className="text-[#1a1005] uppercase tracking-[0.15em] text-xs sm:text-[16px] md:text-[18px] font-semibold font-sans mb-1 sm:mb-2 drop-shadow-sm">
            A Celebration Of
          </span>
          <h3 className="text-[#3b2a1a] font-display text-4xl sm:text-[4.5rem] md:text-[5rem] tracking-tight leading-none italic drop-shadow-sm mb-4 sm:mb-12">
            Tradition & Love
          </h3>

          <p className="text-[#1a1005] font-serif text-[13px] sm:text-[18px] md:text-[22px] leading-[1.6] sm:leading-[1.8] max-w-[95%] sm:max-w-[85%] mx-auto mb-5 sm:mb-16 drop-shadow-sm">
            Request the Honor of Your Presence<br/>
            At the Celebration of the Marriage of their beloved children<br/>
            <span className="font-semibold text-[15px] sm:text-2xl mt-1 sm:mt-2 block">Harshani & Madhawa</span>
          </p>

          <div className="flex flex-col gap-4 sm:gap-10 w-full max-w-[95%] sm:max-w-[75%] mx-auto items-center text-center bg-white/40 backdrop-blur-md p-5 sm:p-12 rounded-[2rem] border border-white/50 shadow-sm">
            
            {/* Date */}
            <div className="flex flex-col items-center">
              <CalendarDays className="w-4 h-4 sm:w-7 sm:h-7 text-[#3b2a1a] mb-2 sm:mb-4 opacity-80" strokeWidth={1} />
              <span className="text-[#1a1005] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[15px] sm:text-xl md:text-2xl font-semibold font-serif leading-tight mb-1 sm:mb-2">
                Thursday, November 26
              </span>
              <span className="text-[#3b2a1a] uppercase tracking-[0.05em] sm:tracking-[0.15em] text-[10px] sm:text-sm md:text-base font-sans opacity-80">
                The Year Two Thousand Twenty Six
              </span>
            </div>

            {/* Divider */}
            <div className="w-10 sm:w-24 h-[1px] bg-[#3b2a1a]/20"></div>

            {/* Time */}
            <div className="flex flex-col items-center">
              <Clock className="w-4 h-4 sm:w-7 sm:h-7 text-[#3b2a1a] mb-2 sm:mb-4 opacity-80" strokeWidth={1} />
              <span className="text-[#1a1005] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[15px] sm:text-xl md:text-2xl font-semibold font-serif leading-tight mb-1 sm:mb-2">
                09:30 AM - 04:00 PM
              </span>
              <span className="text-[#3b2a1a] tracking-[0.05em] sm:tracking-[0.1em] text-[12px] sm:text-base md:text-lg font-sans opacity-80 italic">
                The Poruwa Ceremony will be held at 10:07 AM
              </span>
            </div>

            {/* Divider */}
            <div className="w-10 sm:w-24 h-[1px] bg-[#3b2a1a]/20"></div>

            {/* Location */}
            <div className="flex flex-col items-center">
              <MapPin className="w-4 h-4 sm:w-7 sm:h-7 text-[#3b2a1a] mb-2 sm:mb-4 opacity-80" strokeWidth={1} />
              <span className="text-[#1a1005] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[15px] sm:text-xl md:text-2xl font-semibold font-serif leading-tight mb-1 sm:mb-2">
                Rimakvin River Edge Resort
              </span>
              <span className="text-[#3b2a1a] uppercase tracking-[0.05em] sm:tracking-[0.15em] text-[10px] sm:text-sm md:text-base font-sans opacity-80">
                The Grand Ballroom, Ambalangoda
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
