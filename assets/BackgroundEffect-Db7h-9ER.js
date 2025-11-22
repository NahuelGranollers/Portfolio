import{a as o,j as a}from"./vendor_react-BNZICmir.js";import"./vendor-CjAKJ2pB.js";const l=()=>{const e=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;return o.useEffect(()=>{if(e)return;document.querySelectorAll(".bg-particle").forEach(t=>{const r=t;r.style.setProperty("--dx",`${Math.random()*100-50}px`),r.style.setProperty("--dy",`${Math.random()*100-50}px`)})},[e]),a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .bg-gradient-layer {
          position: fixed;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, #1a1a2e 0%, #0a0a0f 60%, #000000 100%);
          z-index: -5;
          pointer-events: none;
        }

        .bg-glow-top {
          position: fixed;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 150%;
          height: 80%;
          background: radial-gradient(
            ellipse at center,
            rgba(187,134,252,0.35) 0%,
            rgba(187,134,252,0.2) 30%,
            transparent 70%
          );
          filter: blur(100px);
          z-index: -4;
          pointer-events: none;
          animation: glow-pulse 8s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.05); }
        }

        .bg-glow-bottom {
          position: fixed;
          bottom: -40%;
          right: -20%;
          width: 100%;
          height: 80%;
          background: radial-gradient(
            circle at center,
            rgba(3,218,198,0.25) 0%,
            rgba(3,218,198,0.15) 30%,
            transparent 70%
          );
          filter: blur(120px);
          z-index: -4;
          pointer-events: none;
          animation: glow-pulse-slow 12s ease-in-out infinite;
        }

        @keyframes glow-pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }

        .bg-shimmer-overlay {
          position: fixed;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(187,134,252,0.12) 0%,
            transparent 40%,
            rgba(3,218,198,0.08) 100%
          );
          z-index: -3;
          pointer-events: none;
          animation: shimmer-move 15s ease-in-out infinite alternate;
        }

        @keyframes shimmer-move {
          0% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 0.7; transform: translateY(-20px); }
          100% { opacity: 0.4; transform: translateY(0); }
        }

        .bg-particles-container {
          position: fixed;
          inset: 0;
          z-index: -2;
          pointer-events: none;
          overflow: hidden;
        }

        .bg-particle {
          position: absolute;
          border-radius: 50%;
          background: var(--color, rgba(255,255,255,0.5));
          width: var(--size, 6px);
          height: var(--size, 6px);
          top: var(--top, 50%);
          left: var(--left, 50%);
          box-shadow: 0 0 20px var(--color, rgba(255,255,255,0.4));
          animation: float-particle var(--duration, 12s) ease-in-out infinite;
          opacity: 0.7;
        }

        .bg-particle:nth-child(1) {
          --color: rgba(187,134,252,0.8);
          --size: 10px;
          --top: 20%;
          --left: 15%;
          --duration: 10s;
        }
        .bg-particle:nth-child(2) {
          --color: rgba(3,218,198,0.7);
          --size: 12px;
          --top: 60%;
          --left: 75%;
          --duration: 14s;
        }
        .bg-particle:nth-child(3) {
          --color: rgba(187,134,252,0.6);
          --size: 8px;
          --top: 45%;
          --left: 35%;
          --duration: 11s;
        }
        .bg-particle:nth-child(4) {
          --color: rgba(3,218,198,0.6);
          --size: 9px;
          --top: 80%;
          --left: 20%;
          --duration: 16s;
        }
        .bg-particle:nth-child(5) {
          --color: rgba(255,255,255,0.5);
          --size: 7px;
          --top: 30%;
          --left: 85%;
          --duration: 13s;
        }
        .bg-particle:nth-child(6) {
          --color: rgba(187,134,252,0.5);
          --size: 8px;
          --top: 70%;
          --left: 50%;
          --duration: 15s;
        }

        @keyframes float-particle {
          0%   { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25%  { transform: translate(var(--dx, 30px), var(--dy, -40px)) scale(1.3); opacity: 0.9; }
          50%  { transform: translate(calc(var(--dx, 30px) * -0.8), calc(var(--dy, -40px) * -0.8)) scale(1.1); opacity: 0.7; }
          75%  { transform: translate(var(--dx, 30px), var(--dy, -40px)) scale(1.2); opacity: 0.8; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
        }

        ${e?`
          .bg-glow-top,
          .bg-glow-bottom,
          .bg-shimmer-overlay,
          .bg-particle {
            animation: none !important;
          }
        `:""}
      `}),a.jsx("div",{className:"bg-gradient-layer","aria-hidden":"true"}),a.jsx("div",{className:"bg-glow-top","aria-hidden":"true"}),a.jsx("div",{className:"bg-glow-bottom","aria-hidden":"true"}),a.jsx("div",{className:"bg-shimmer-overlay","aria-hidden":"true"}),a.jsx("div",{className:"bg-particles-container","aria-hidden":"true",children:[...Array(6)].map((i,t)=>a.jsx("div",{className:"bg-particle"},t))})]})};export{l as default};
