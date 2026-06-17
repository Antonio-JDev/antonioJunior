"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkGithub: string;
  linkDeploy: string;
  technologies: string[];
  dateLabel: string;
};

function ProjectDescription({ description }: { description: string }) {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const measure = () => {
      if (expanded) {
        setCanExpand(element.scrollHeight > 0);
        return;
      }

      setCanExpand(element.scrollHeight > element.clientHeight + 1);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [description, expanded]);

  return (
    <div className="project-card-description">
      <p ref={textRef} className={`project-card-description-text ${expanded ? "is-expanded" : "is-clamped"}`}>
        {description}
      </p>
      {canExpand ? (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="project-card-read-more"
          aria-expanded={expanded}
        >
          {expanded ? "Ler menos" : "Ler mais"}
        </button>
      ) : null}
    </div>
  );
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  linkGithub,
  linkDeploy,
  technologies,
  dateLabel,
}: ProjectCardProps) {
  return (
    <article className="project-card hover-lift">
      <div className="project-card-media">
        <Image src={imageUrl} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 33vw" />
      </div>

      <div className="project-card-body">
        <div className="project-card-header">
          <h3 className="project-card-title">{title}</h3>
          {dateLabel ? <span className="project-card-date">{dateLabel}</span> : null}
        </div>

        <ProjectDescription description={description} />

        <div className="project-card-tags">
          {technologies.map((tech) => (
            <span key={`${id}-${tech}`} className="project-card-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-actions">
          <a href={linkGithub} target="_blank" rel="noopener noreferrer" className="project-card-link">
            GitHub
          </a>
          <a href={linkDeploy} target="_blank" rel="noopener noreferrer" className="project-card-check-btn">
            Conferir
            <HiOutlineArrowRight className="text-base" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
