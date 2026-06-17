export function HeroParticleLayer() {
  return (
    <svg
      className="hero-particle-layer-svg"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="hero-particle-white" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="16" cy="16" r="1" fill="rgba(255,255,255,0.14)" />
        </pattern>
        <pattern
          id="hero-particle-cyan"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
          patternTransform="translate(16,16)"
        >
          <circle cx="16" cy="16" r="1" fill="rgba(56,189,248,0.2)" />
        </pattern>
        <linearGradient id="hero-particle-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="72%" stopColor="white" stopOpacity="0.92" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="hero-particle-mask">
          <rect width="100%" height="100%" fill="url(#hero-particle-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-particle-white)" mask="url(#hero-particle-mask)" />
      <rect width="100%" height="100%" fill="url(#hero-particle-cyan)" mask="url(#hero-particle-mask)" />
    </svg>
  );
}
