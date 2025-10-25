import React from 'react';

const BackgroundEffect: React.FC = () => {
  return (
    <>
      <style>{`
        .test-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 50% 50%, rgba(187,134,252,0.8) 0%, transparent 50%);
          z-index: -1;
          pointer-events: none;
        }

        .test-particle {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 100px;
          height: 100px;
          background: rgba(3,218,198,0.8);
          border-radius: 50%;
          z-index: -1;
          pointer-events: none;
        }
      `}</style>

      <div className="test-glow" aria-hidden="true" />
      <div className="test-particle" aria-hidden="true" />
    </>
  );
};

export default BackgroundEffect;
