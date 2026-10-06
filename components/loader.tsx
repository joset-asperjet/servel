'use client';

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background select-none">
      <style>{`
        @keyframes pulseLogo {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.98);
            filter: blur(1px) drop-shadow(0 0 0px var(--accent));
          }
          50% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px) drop-shadow(0 0 40px var(--accent));
          }
        }
        
        @keyframes loadingTrack {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .loader-pulse {
          animation: pulseLogo 2s ease-in-out infinite;
        }

        .loading-bar-track {
          width: 80px;
          height: 1.5px;
          background: rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          margin-top: 1.5rem;
          border-radius: 1px;
        }

        .loading-bar-fill {
          position: absolute;
          width: 40%;
          height: 100%;
          background: var(--accent);
          animation: loadingTrack 1.5s infinite ease-in-out;
          box-shadow: 0 0 10px var(--accent);
        }
      `}</style>

      <div className="flex flex-col items-center">
        <div className="loader-pulse flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            SERVEL
          </h1>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.6em] text-white/40 translate-x-[0.3em]">
            LOADING
          </p>
        </div>

        {/* Minimalist Loading Bar */}
        <div className="loading-bar-track">
          <div className="loading-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}
