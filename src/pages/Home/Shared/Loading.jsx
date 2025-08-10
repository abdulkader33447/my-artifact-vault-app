import React from 'react';
import "./ArtifactSpinner.css";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="relative flex justify-center items-center">
        
        {/* Outer golden ring */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-[4px] sm:border-[5px] md:border-[6px] border-[#00bf835d] border-t-transparent animate-spin-slow shadow-[0_0_20px_rgba(0,191,131,0.36)]"></div>

        {/* Middle rune circle */}
        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-[1.5px] sm:border-[2px] border-dashed border-[#00bf835d] animate-spin-reverse flex justify-center items-center rune-glow">
          <span className="text-[#00bf835d] font-serif text-[20px] sm:text-[30px] md:text-[40px] lg:text-[45px] tracking-widest select-none">
            ✦ ⚜︎ ⚱︎ ⚚ ✶ ☉ ✵ ⚝ 
          </span>
        </div>

        {/* Inner glowing core */}
        <div className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#00bf835d] to-[#00bf835d] shadow-[0_0_25px_rgba(0,191,131,0.36)] animate-pulse"></div>

        {/* Rotating energy wave (SVG) */}
        <svg
          className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 animate-spin-slower"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="url(#grad)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="6 6"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00bf835d" />
              <stop offset="100%" stopColor="#00bf835d" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Loading text */}
      <p className="mt-6 text-[#00bf835d] font-serif tracking-[0.3em] text-sm sm:text-base md:text-lg">
        AWAKENING THE RELICS...
      </p>
    </div>
  );
};

export default Loading;
