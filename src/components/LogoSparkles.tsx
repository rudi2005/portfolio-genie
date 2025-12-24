import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export function LogoSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = [];
      for (let i = 0; i < 8; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 2,
          duration: Math.random() * 1.5 + 1,
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M12 0L13.5 9L22 12L13.5 15L12 24L10.5 15L2 12L10.5 9L12 0Z"
              fill="url(#sparkle-gradient)"
            />
            <defs>
              <linearGradient id="sparkle-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(0, 84%, 60%)" />
                <stop offset="50%" stopColor="hsl(0, 0%, 100%)" />
                <stop offset="100%" stopColor="hsl(0, 84%, 50%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
