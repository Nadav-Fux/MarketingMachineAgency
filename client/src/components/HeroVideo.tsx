import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroVideoProps {
  colorScheme?: "orange" | "green" | "purple" | "blue" | "red";
}

export default function HeroVideo({ colorScheme = "orange" }: HeroVideoProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    // Define colors based on scheme
    const colors: Record<string, { primary: string; secondary: string; accent: string }> = {
      orange: { primary: "#f97316", secondary: "#ea580c", accent: "#fbbf24" },
      green: { primary: "#10b981", secondary: "#059669", accent: "#34d399" },
      purple: { primary: "#a855f7", secondary: "#9333ea", accent: "#e879f9" },
      blue: { primary: "#3b82f6", secondary: "#1d4ed8", accent: "#60a5fa" },
      red: { primary: "#ef4444", secondary: "#dc2626", accent: "#fca5a5" },
    };

    const color = colors[colorScheme];

    // Get all elements
    const mainLine = svgRef.current.querySelector("[data-line='main']");
    const particles = svgRef.current.querySelectorAll("[data-particle]");
    const gears = svgRef.current.querySelectorAll("[data-gear]");
    const sparks = svgRef.current.querySelectorAll("[data-spark]");
    const energyBurst = svgRef.current.querySelector("[data-burst]");

    // Animation sequence
    // Phase 1: Line draws from right to left
    timeline.fromTo(
      mainLine,
      { strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" },
      0
    );

    // Phase 2: Gears start rotating
    timeline.to(
      gears[0],
      { rotation: 360, transformOrigin: "50% 50%", duration: 3, ease: "none" },
      0.5
    );

    timeline.to(
      gears[1],
      { rotation: -360, transformOrigin: "50% 50%", duration: 3, ease: "none" },
      0.5
    );

    // Phase 3: Particles start moving
    particles.forEach((particle, index) => {
      const startX = Math.random() * 400 - 200;
      const startY = Math.random() * 300 - 150;
      const endX = startX + (Math.random() * 200 - 100);
      const endY = startY + (Math.random() * 200 - 100);

      timeline.fromTo(
        particle,
        { opacity: 0, x: startX, y: startY },
        { opacity: 1, x: endX, y: endY, duration: 1.5, ease: "power1.out" },
        1
      );
    });

    // Phase 4: Energy burst
    timeline.fromTo(
      energyBurst,
      { opacity: 0, r: 10 },
      { opacity: 1, r: 100, duration: 0.8, ease: "power2.out" },
      2
    );

    timeline.to(energyBurst, { opacity: 0, duration: 0.5 }, 2.5);

    // Phase 5: Sparks fly
    sparks.forEach((spark, index) => {
      const angle = (index / sparks.length) * Math.PI * 2;
      const distance = 150;
      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance;

      timeline.fromTo(
        spark,
        { opacity: 1, x: 0, y: 0 },
        { opacity: 0, x: endX, y: endY, duration: 1, ease: "power1.out" },
        2
      );
    });

    return () => {
      timeline.kill();
    };
  }, [colorScheme]);

  const colors: Record<string, { primary: string; secondary: string; accent: string }> = {
    orange: { primary: "#f97316", secondary: "#ea580c", accent: "#fbbf24" },
    green: { primary: "#10b981", secondary: "#059669", accent: "#34d399" },
    purple: { primary: "#a855f7", secondary: "#9333ea", accent: "#e879f9" },
    blue: { primary: "#3b82f6", secondary: "#1d4ed8", accent: "#60a5fa" },
    red: { primary: "#ef4444", secondary: "#dc2626", accent: "#fca5a5" },
  };

  const color = colors[colorScheme];

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg overflow-hidden">
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color.primary} />
            <stop offset="100%" stopColor={color.accent} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main flowing line */}
        <path
          data-line="main"
          d="M 50 200 Q 200 100 400 150 Q 600 200 750 180"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="4"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Gears */}
        <g data-gear="1" transform="translate(200, 150)">
          <circle cx="0" cy="0" r="30" fill="none" stroke={color.primary} strokeWidth="2" />
          <circle cx="0" cy="0" r="20" fill="none" stroke={color.primary} strokeWidth="1" opacity="0.5" />
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <rect
              key={angle}
              x={-3}
              y={-35}
              width="6"
              height="10"
              fill={color.primary}
              transform={`rotate(${angle})`}
            />
          ))}
        </g>

        <g data-gear="2" transform="translate(600, 180)">
          <circle cx="0" cy="0" r="25" fill="none" stroke={color.secondary} strokeWidth="2" />
          <circle cx="0" cy="0" r="15" fill="none" stroke={color.secondary} strokeWidth="1" opacity="0.5" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect
              key={angle}
              x={-2}
              y={-30}
              width="4"
              height="8"
              fill={color.secondary}
              transform={`rotate(${angle})`}
            />
          ))}
        </g>

        {/* Particles */}
        {[...Array(12)].map((_, i) => (
          <circle key={i} data-particle={i} cx="400" cy="200" r="3" fill={color.accent} opacity="0" />
        ))}

        {/* Energy burst center */}
        <circle data-burst="true" cx="400" cy="200" r="10" fill={color.primary} opacity="0" filter="url(#glow)" />

        {/* Sparks */}
        {[...Array(16)].map((_, i) => (
          <line
            key={i}
            data-spark={i}
            x1="400"
            y1="200"
            x2="400"
            y2="150"
            stroke={color.accent}
            strokeWidth="2"
            opacity="0"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}

