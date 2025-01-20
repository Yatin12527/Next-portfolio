import React from 'react';

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="relative h-full w-full bg-black">
        {/* Grid pattern with more visible lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(79, 79, 79, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(79, 79, 79, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px"
          }}
        />
        {/* Centered gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at center 25%,
                rgba(251, 251, 251, 0.21) 0%,
                transparent 60%
              )
            `
          }}
        />
      </div>
    </div>
  );
};

export default GradientBackground;