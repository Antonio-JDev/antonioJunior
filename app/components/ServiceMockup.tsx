export type ServiceMockupType = "laptop" | "diagram" | "chatbot" | "dashboard" | "architecture";

type ServiceMockupProps = {
  type: ServiceMockupType;
};

export function ServiceMockup({ type }: ServiceMockupProps) {
  return (
    <div className="service-mockup" aria-hidden="true">
      {type === "laptop" ? <LaptopMockup /> : null}
      {type === "diagram" ? <DiagramMockup /> : null}
      {type === "chatbot" ? <ChatbotMockup /> : null}
      {type === "dashboard" ? <DashboardMockup /> : null}
      {type === "architecture" ? <ArchitectureMockup /> : null}
    </div>
  );
}

function LaptopMockup() {
  return (
    <svg viewBox="0 0 200 120" className="service-mockup-svg">
      <rect x="24" y="16" width="152" height="88" rx="6" fill="#121722" stroke="rgba(212,175,55,0.35)" />
      <rect x="32" y="24" width="136" height="68" rx="3" fill="#0b0d14" />
      <rect x="40" y="34" width="56" height="6" rx="2" fill="rgba(212,175,55,0.5)" />
      <rect x="40" y="46" width="88" height="4" rx="2" fill="rgba(182,189,201,0.35)" />
      <rect x="40" y="56" width="72" height="4" rx="2" fill="rgba(182,189,201,0.25)" />
      <rect x="40" y="70" width="48" height="14" rx="3" fill="rgba(46,168,255,0.35)" />
      <path d="M8 104 H192 L176 112 H24 Z" fill="#181e2a" stroke="rgba(212,175,55,0.25)" />
    </svg>
  );
}

function DiagramMockup() {
  return (
    <svg viewBox="0 0 200 120" className="service-mockup-svg">
      <circle cx="40" cy="60" r="14" fill="#121722" stroke="rgba(212,175,55,0.45)" />
      <circle cx="100" cy="30" r="12" fill="#121722" stroke="rgba(248,224,138,0.4)" />
      <circle cx="100" cy="90" r="12" fill="#121722" stroke="rgba(46,168,255,0.4)" />
      <circle cx="160" cy="60" r="14" fill="#121722" stroke="rgba(212,175,55,0.45)" />
      <line x1="54" y1="52" x2="88" y2="36" stroke="rgba(212,175,55,0.35)" strokeWidth="1.5" />
      <line x1="54" y1="68" x2="88" y2="84" stroke="rgba(212,175,55,0.35)" strokeWidth="1.5" />
      <line x1="112" y1="36" x2="146" y2="52" stroke="rgba(248,224,138,0.35)" strokeWidth="1.5" />
      <line x1="112" y1="84" x2="146" y2="68" stroke="rgba(46,168,255,0.35)" strokeWidth="1.5" />
      <text x="34" y="64" fill="rgba(248,224,138,0.7)" fontSize="7" fontFamily="monospace">
        MCP
      </text>
    </svg>
  );
}

function ChatbotMockup() {
  return (
    <svg viewBox="0 0 200 120" className="service-mockup-svg">
      <rect x="20" y="20" width="160" height="80" rx="10" fill="#121722" stroke="rgba(212,175,55,0.3)" />
      <rect x="32" y="34" width="72" height="22" rx="8" fill="rgba(212,175,55,0.15)" />
      <rect x="96" y="62" width="72" height="22" rx="8" fill="rgba(46,168,255,0.2)" />
      <circle cx="44" cy="88" r="3" fill="rgba(248,224,138,0.5)" />
      <circle cx="56" cy="88" r="3" fill="rgba(248,224,138,0.35)" />
      <circle cx="68" cy="88" r="3" fill="rgba(248,224,138,0.2)" />
    </svg>
  );
}

function DashboardMockup() {
  return (
    <svg viewBox="0 0 200 120" className="service-mockup-svg">
      <rect x="16" y="18" width="168" height="84" rx="8" fill="#121722" stroke="rgba(212,175,55,0.3)" />
      <rect x="24" y="28" width="40" height="56" rx="4" fill="rgba(212,175,55,0.12)" />
      <rect x="72" y="28" width="104" height="24" rx="4" fill="rgba(46,168,255,0.15)" />
      <rect x="72" y="60" width="48" height="24" rx="4" fill="rgba(248,224,138,0.12)" />
      <rect x="128" y="60" width="48" height="24" rx="4" fill="rgba(182,189,201,0.1)" />
      <polyline
        points="78,44 92,38 108,42 124,30 164,34"
        fill="none"
        stroke="rgba(46,168,255,0.55)"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchitectureMockup() {
  return (
    <svg viewBox="0 0 200 120" className="service-mockup-svg">
      <rect x="70" y="14" width="60" height="22" rx="4" fill="rgba(212,175,55,0.2)" stroke="rgba(212,175,55,0.4)" />
      <rect x="30" y="48" width="50" height="22" rx="4" fill="#121722" stroke="rgba(182,189,201,0.3)" />
      <rect x="120" y="48" width="50" height="22" rx="4" fill="#121722" stroke="rgba(182,189,201,0.3)" />
      <rect x="70" y="82" width="60" height="22" rx="4" fill="rgba(46,168,255,0.15)" stroke="rgba(46,168,255,0.35)" />
      <line x1="100" y1="36" x2="55" y2="48" stroke="rgba(212,175,55,0.3)" />
      <line x1="100" y1="36" x2="145" y2="48" stroke="rgba(212,175,55,0.3)" />
      <line x1="55" y1="70" x2="100" y2="82" stroke="rgba(182,189,201,0.25)" />
      <line x1="145" y1="70" x2="100" y2="82" stroke="rgba(182,189,201,0.25)" />
    </svg>
  );
}
