"use client";

import {
  getArcOffset,
  skillCategories,
  splitSkillsForOrbit,
  type SkillNode,
} from "@/app/lib/skills-data";
import { useCallback, useId, useLayoutEffect, useRef, useState } from "react";
import { HiOutlineCode, HiPlus } from "react-icons/hi";

type ConnectionPath = {
  d: string;
  hubX: number;
  hubY: number;
  cardX: number;
  cardY: number;
};

function buildCurvedPathFromHub(
  hubX: number,
  hubY: number,
  cardX: number,
  cardY: number,
  side: "left" | "right"
): string {
  const span = Math.abs(cardX - hubX);

  if (side === "left") {
    const cp1x = hubX - span * 0.18;
    const cp1y = hubY;
    const cp2x = cardX + span * 0.52;
    const cp2y = cardY + (hubY - cardY) * 0.08;
    return `M ${hubX} ${hubY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${cardX} ${cardY}`;
  }

  const cp1x = hubX + span * 0.18;
  const cp1y = hubY;
  const cp2x = cardX - span * 0.52;
  const cp2y = cardY + (hubY - cardY) * 0.08;
  return `M ${hubX} ${hubY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${cardX} ${cardY}`;
}

function SkillCard({ skill, compact = false }: { skill: SkillNode; compact?: boolean }) {
  const Icon = skill.icon;

  return (
    <article
      className={`skills-hub-card ${skill.active !== false ? "skills-hub-card--active" : "skills-hub-card--inactive"} ${compact ? "skills-hub-card--compact" : ""}`}
    >
      <span className="skills-hub-card-icon-wrap" aria-hidden="true">
        <span className="skills-hub-card-icon-glow" style={{ background: skill.glow }} />
        <span className="skills-hub-card-icon" style={{ color: skill.iconColor }}>
          <Icon />
        </span>
      </span>
      <div className="skills-hub-card-copy">
        <p className="skills-hub-card-title">{skill.name}</p>
        {skill.subtitle ? <p className="skills-hub-card-subtitle">{skill.subtitle}</p> : null}
      </div>
      <button type="button" className="skills-hub-card-action" aria-label={`Detalhes de ${skill.name}`}>
        <HiPlus />
      </button>
    </article>
  );
}

function CategoryTabs({
  activeId,
  onChange,
}: {
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="skills-hub-tabs" role="tablist" aria-label="Categorias de stack">
      {skillCategories.map((category) => (
        <button
          key={category.id}
          type="button"
          role="tab"
          aria-selected={activeId === category.id}
          className={`skills-hub-tab ${activeId === category.id ? "skills-hub-tab--active" : ""}`}
          onClick={() => onChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

function SkillsOrbitDesktop({
  leftSkills,
  rightSkills,
  activeCategory,
}: {
  leftSkills: SkillNode[];
  rightSkills: SkillNode[];
  activeCategory: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathsSnapshotRef = useRef("");
  const rafRef = useRef<number | null>(null);
  const [paths, setPaths] = useState<ConnectionPath[]>([]);
  const gradientId = useId().replace(/:/g, "");

  const updateLines = useCallback(() => {
    const container = containerRef.current?.getBoundingClientRect();
    const hub = hubRef.current?.getBoundingClientRect();
    if (!container || !hub || container.width === 0 || container.height === 0) return;

    const hubLeft = hub.left - container.left;
    const hubRight = hub.right - container.left;
    const hubCenterY = hub.top - container.top + hub.height / 2;

    const nextPaths: ConnectionPath[] = [];

    leftRefs.current.forEach((node) => {
      if (!node) return;
      const card = node.getBoundingClientRect();
      if (card.width === 0 || card.height === 0) return;
      const cardX = card.right - container.left;
      const cardY = card.top - container.top + card.height / 2;
      nextPaths.push({
        d: buildCurvedPathFromHub(hubLeft, hubCenterY, cardX, cardY, "left"),
        hubX: hubLeft,
        hubY: hubCenterY,
        cardX,
        cardY,
      });
    });

    rightRefs.current.forEach((node) => {
      if (!node) return;
      const card = node.getBoundingClientRect();
      if (card.width === 0 || card.height === 0) return;
      const cardX = card.left - container.left;
      const cardY = card.top - container.top + card.height / 2;
      nextPaths.push({
        d: buildCurvedPathFromHub(hubRight, hubCenterY, cardX, cardY, "right"),
        hubX: hubRight,
        hubY: hubCenterY,
        cardX,
        cardY,
      });
    });

    if (nextPaths.length === 0) return;

    const snapshot = nextPaths.map((path) => path.d).join("|");
    if (snapshot === pathsSnapshotRef.current) return;

    pathsSnapshotRef.current = snapshot;
    setPaths(nextPaths);
  }, []);

  const scheduleLineUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      updateLines();
    });
  }, [updateLines]);

  useLayoutEffect(() => {
    pathsSnapshotRef.current = "";
    leftRefs.current = leftRefs.current.slice(0, leftSkills.length);
    rightRefs.current = rightRefs.current.slice(0, rightSkills.length);

    scheduleLineUpdate();
    const timers = [50, 150, 300].map((delay) => window.setTimeout(scheduleLineUpdate, delay));

    const container = containerRef.current;
    const resizeObserver = new ResizeObserver(scheduleLineUpdate);
    if (container) resizeObserver.observe(container);

    const intersectionObserver =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                scheduleLineUpdate();
              }
            },
            { threshold: 0.05 }
          )
        : null;

    if (container && intersectionObserver) {
      intersectionObserver.observe(container);
    }

    window.addEventListener("resize", scheduleLineUpdate);
    document.fonts?.ready.then(scheduleLineUpdate).catch(() => undefined);

    return () => {
      timers.forEach(clearTimeout);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      resizeObserver.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener("resize", scheduleLineUpdate);
    };
  }, [activeCategory, leftSkills.length, rightSkills.length, scheduleLineUpdate]);

  return (
    <div ref={containerRef} className="skills-hub-orbit relative mx-auto w-full">
      <svg className="skills-hub-svg pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          {paths.map((path, index) => (
            <linearGradient
              key={index}
              id={`${gradientId}-${index}`}
              gradientUnits="userSpaceOnUse"
              x1={path.hubX}
              y1={path.hubY}
              x2={path.cardX}
              y2={path.cardY}
            >
              <stop offset="0%" stopColor="rgba(212, 175, 55, 0.55)" />
              <stop offset="45%" stopColor="rgba(248, 224, 138, 0.28)" />
              <stop offset="100%" stopColor="rgba(212, 175, 55, 0.1)" />
            </linearGradient>
          ))}
        </defs>
        {paths.map((path, index) => (
          <g key={index}>
            <path d={path.d} className="skills-hub-line skills-hub-line--base" stroke={`url(#${gradientId}-${index})`} />
            <path
              d={path.d}
              className="skills-hub-line skills-hub-line--pulse"
              style={{ animationDelay: `${index * 0.22}s` }}
            />
          </g>
        ))}
      </svg>

      <div className="skills-hub-grid">
        <div className="skills-hub-column skills-hub-column--left">
          {leftSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="skills-hub-card-wrap"
              style={{ ["--arc-offset" as string]: `${getArcOffset(index, leftSkills.length, "left")}rem` }}
              ref={(node) => {
                leftRefs.current[index] = node;
              }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        <div className="skills-hub-center">
          <div className="skills-hub-core-glow" aria-hidden="true" />
          <div ref={hubRef} className="skills-hub-core">
            <HiOutlineCode className="skills-hub-core-icon" />
          </div>
        </div>

        <div className="skills-hub-column skills-hub-column--right">
          {rightSkills.map((skill, index) => (
            <div
              key={skill.id}
              className="skills-hub-card-wrap"
              style={{ ["--arc-offset" as string]: `${getArcOffset(index, rightSkills.length, "right")}rem` }}
              ref={(node) => {
                rightRefs.current[index] = node;
              }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsHub() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const category = skillCategories.find((item) => item.id === activeCategory) ?? skillCategories[0];
  const { left, right } = splitSkillsForOrbit(category.skills);

  return (
    <div className="skills-hub">
      <CategoryTabs activeId={activeCategory} onChange={setActiveCategory} />

      <div className="skills-hub-mobile md:hidden">
        <div className="skills-hub-mobile-grid">
          {category.skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} compact />
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <SkillsOrbitDesktop
          key={activeCategory}
          leftSkills={left}
          rightSkills={right}
          activeCategory={activeCategory}
        />
      </div>
    </div>
  );
}
