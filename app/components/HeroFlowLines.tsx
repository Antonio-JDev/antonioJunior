type CircuitNetwork = {
  paths: string[];
  nodes: [number, number][];
};

const CIRCUIT_NETWORKS: CircuitNetwork[] = [
  {
    paths: [
      "M 88 120 L 88 220 L 176 220 L 176 300 L 104 300 L 104 400",
      "M 196 96 L 276 96 L 276 176 L 196 176",
      "M 56 280 L 56 360 L 144 360",
      "M 168 148 L 248 208",
      "M 120 440 L 220 440 L 220 520 L 160 520",
      "M 72 480 L 72 560 L 148 560",
    ],
    nodes: [
      [88, 120], [88, 220], [176, 220], [176, 300], [104, 300], [104, 400],
      [196, 96], [276, 96], [276, 176], [196, 176],
      [56, 280], [56, 360], [144, 360],
      [168, 148], [248, 208],
      [120, 440], [220, 440], [220, 520], [160, 520],
      [72, 480], [72, 560], [148, 560],
    ],
  },
  {
    paths: [
      "M 724 160 L 824 160 L 824 260 L 744 260 L 744 340",
      "M 876 120 L 876 220 L 796 220",
      "M 696 380 L 796 380 L 796 480 L 896 480",
      "M 756 500 L 856 500 L 856 600",
      "M 824 300 L 904 360",
      "M 676 260 L 676 340 L 756 340",
      "M 840 420 L 920 420 L 920 500",
    ],
    nodes: [
      [724, 160], [824, 160], [824, 260], [744, 260], [744, 340],
      [876, 120], [876, 220], [796, 220],
      [696, 380], [796, 380], [796, 480], [896, 480],
      [756, 500], [856, 500], [856, 600],
      [824, 300], [904, 360],
      [676, 260], [676, 340], [756, 340],
      [840, 420], [920, 420], [920, 500],
    ],
  },
  {
    paths: [
      "M 408 180 L 508 180 L 508 260",
      "M 468 340 L 568 340 L 568 400",
      "M 432 520 L 532 520 L 532 600 L 472 600",
    ],
    nodes: [
      [408, 180], [508, 180], [508, 260],
      [468, 340], [568, 340], [568, 400],
      [432, 520], [532, 520], [532, 600], [472, 600],
    ],
  },
];

const ARC_PATHS = [
  "M 620 80 A 180 180 0 0 1 820 200",
  "M 180 60 A 220 220 0 0 0 60 240",
  "M 900 440 A 140 140 0 0 0 760 520",
];

export function HeroFlowLines() {
  return (
    <svg
      className="hero-flow-lines-svg"
      viewBox="0 0 1000 1000"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="hero-circuit-fade" cx="50%" cy="42%" r="68%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="55%" stopColor="white" stopOpacity="0.75" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="hero-circuit-mask">
          <rect width="100%" height="100%" fill="url(#hero-circuit-fade)" />
        </mask>
      </defs>

      <g mask="url(#hero-circuit-mask)" className="hero-circuit-network">
        {ARC_PATHS.map((d, index) => (
          <path
            key={`arc-${index}`}
            d={d}
            fill="none"
            stroke="rgba(212,175,55,0.14)"
            strokeWidth="0.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        ))}

        {CIRCUIT_NETWORKS.map((network, networkIndex) => (
          <g key={`network-${networkIndex}`}>
            {network.paths.map((d, pathIndex) => (
              <path
                key={`path-${networkIndex}-${pathIndex}`}
                d={d}
                fill="none"
                stroke="rgba(212,175,55,0.22)"
                strokeWidth="0.65"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {network.nodes.map(([cx, cy], nodeIndex) => (
              <circle
                key={`node-${networkIndex}-${nodeIndex}`}
                cx={cx}
                cy={cy}
                r="1.6"
                fill="rgba(248,224,138,0.4)"
              />
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}
