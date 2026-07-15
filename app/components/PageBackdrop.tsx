import { HeroFlowLines } from "@/app/components/HeroFlowLines";
import { HeroParticleLayer } from "@/app/components/HeroParticleLayer";

export function PageBackdrop() {
  return (
    <div className="page-backdrop" aria-hidden="true">
      <div className="page-backdrop-grid" />
      <div className="page-backdrop-hero-fx">
        <div className="hero-particle-layer">
          <HeroParticleLayer />
        </div>
        <div className="hero-flow-lines">
          <HeroFlowLines />
        </div>
      </div>
      <div className="page-glow page-glow--hero-accent" />
      <div className="page-glow page-glow--photo-primary" />
      <div className="page-glow page-glow--photo-secondary" />
      <div className="page-glow page-glow--hero-floor" />
      <div className="page-glow page-glow--mid" />
      <div className="page-glow page-glow--contact" />
      <div className="page-sparkle" />
    </div>
  );
}
