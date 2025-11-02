import { useEffect, useRef } from "react";

interface LogoBand {
  text: string;
  color: string;
  speed: number;
}

const logoBands: LogoBand[] = [
  { text: "WEB DEVELOPMENT", color: "from-blue-500 to-cyan-400", speed: 30 },
  { text: "GRAPHIC DESIGN", color: "from-pink-500 to-purple-400", speed: 25 },
];

export default function AnimatedLogoBands() {
  const bandsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bands = bandsRef.current;
    if (!bands) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const bandElements = bands.querySelectorAll('.logo-band');
          
          bandElements.forEach((band, index) => {
            const speed = logoBands[index].speed;
            (band as HTMLElement).style.transform = `translateX(${scrolled * speed / 100}px) rotate(-8deg)`;
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={bandsRef} className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {logoBands.map((band, index) => (
        <div
          key={index}
          className={`logo-band absolute w-[150%] h-16 flex items-center justify-center gap-12 bg-gradient-to-r ${band.color} text-white font-black text-sm tracking-widest transition-transform duration-200 shadow-2xl`}
          style={{
            top: `${40 + index * 20}%`,
            left: '-25%',
            transform: 'rotate(-8deg)',
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              {band.text}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
