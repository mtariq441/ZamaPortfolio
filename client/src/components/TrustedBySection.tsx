import { useEffect, useRef } from "react";

interface Band {
  text: string;
  bgColor: string;
  textColor: string;
  speed: number;
}

const bands: Band[] = [
  { text: "WEB DEVELOPMENT", bgColor: "bg-slate-900", textColor: "text-white", speed: 20 },
  { text: "GRAPHIC DESIGN", bgColor: "bg-slate-800", textColor: "text-white", speed: 15 },
  { text: "BRANDING", bgColor: "bg-slate-900", textColor: "text-white", speed: 25 },
];

export default function TrustedBySection() {
  const bandsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = bandsRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const bandElements = container.querySelectorAll('.trust-band');
          
          bandElements.forEach((band, index) => {
            const speed = bands[index]?.speed || 20;
            (band as HTMLElement).style.transform = `translateX(${scrolled * speed / 100}px) rotate(-3deg)`;
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
    <section className="relative w-full py-20 md:py-24 overflow-hidden bg-background" data-testid="section-trusted-by">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-muted-foreground uppercase tracking-wider" data-testid="text-trusted-by-heading">
          Trusted By Businesses Worldwide
        </h2>
      </div>

      <div ref={bandsRef} className="relative w-full h-64 md:h-80 overflow-hidden" data-testid="container-animated-bands">
        {bands.map((band, index) => (
          <div
            key={index}
            className={`trust-band absolute w-[150%] h-16 md:h-20 flex items-center justify-center gap-12 md:gap-16 ${band.bgColor} ${band.textColor} font-black text-base md:text-xl tracking-widest transition-transform duration-200 shadow-2xl`}
            style={{
              top: `${20 + index * 25}%`,
              left: '-25%',
              transform: 'rotate(-3deg)',
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="flex items-center gap-4 whitespace-nowrap">
                <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="3" />
                </svg>
                {band.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
