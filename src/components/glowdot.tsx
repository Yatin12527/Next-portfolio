import React from 'react';

const GlowingDot = () => {
  return (
    <div className="inline-flex items-center justify-center w-6 h-6">
      <div className="w-2 h-2 rounded-full bg-white 
                    animate-pulse
                    relative
                    before:content-[''] 
                    before:absolute 
                    before:w-full 
                    before:h-full 
                    before:rounded-full
                    before:bg-white/50
                    before:animate-ping
                    after:content-['']
                    after:absolute
                    after:w-4 
                    after:h-4 
                    after:-left-1
                    after:-top-1
                    after:rounded-full
                    after:bg-white/30
                    after:blur-sm"
      />
    </div>
  );
};

export default GlowingDot;