import { useEffect, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "50+", label: "Projects Completed" },
  { value: "100K+", label: "Lines of Code" },
  { value: "30+", label: "Happy Clients" },
];

export default function PremiumStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const delayClasses = ['delay-0', 'delay-100', 'delay-200'];

  return (
    <div className="relative z-30 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`text-center ${prefersReducedMotion ? '' : `transform transition-all duration-700 ${delayClasses[index]}`} ${
            isVisible ? 'translate-y-0 opacity-100' : prefersReducedMotion ? 'opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-accent via-primary to-purple-500 bg-clip-text text-transparent mb-2">
            {stat.value}
          </div>
          <div className="text-sm md:text-base font-semibold text-muted-foreground uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
