"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const MAX_PARALLAX = 8;

export function HeroFounderStage() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ photoX: 0, photoY: 0 });
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setParallaxEnabled(mq.matches && !reduce);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!parallaxEnabled || !stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      setParallax({
        photoX: nx * MAX_PARALLAX,
        photoY: ny * MAX_PARALLAX * 0.6,
      });
    },
    [parallaxEnabled]
  );

  const onMouseLeave = useCallback(() => {
    setParallax({ photoX: 0, photoY: 0 });
  }, []);

  return (
    <div
      ref={stageRef}
      className="hero-founder-stage"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="hero-founder-bg-fx" aria-hidden="true">
        <div className="hero-founder-particles" />
      </div>

      <div className="hero-founder-shine" aria-hidden="true" />

      <div className="hero-founder-lights" aria-hidden="true">
        <div className="hero-founder-key-light" />
        <div className="hero-founder-rim-light" />
        <div className="hero-founder-shirt-glow" />
        <div className="hero-founder-shadow" />
      </div>

      <motion.div
        className="hero-founder-photo-wrap"
        initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.9, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2, ease }}
      >
        <div
          className="hero-founder-photo-parallax"
          style={
            parallaxEnabled
              ? { transform: `translate(${parallax.photoX}px, ${parallax.photoY}px)` }
              : undefined
          }
        >
          <Image
            src="/assets/images/antonio-junior-foto.png"
            alt="Antonio Junior, fundador da AJ Software & Consultoria"
            width={560}
            height={700}
            priority
            className="hero-founder-photo"
            sizes="(max-width: 1023px) 85vw, 52vw"
          />
        </div>
      </motion.div>
    </div>
  );
}
