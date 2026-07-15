"use client";

import { StaggerItem } from "@/app/components/motion/Reveal";
import { getProjectPsr } from "@/app/lib/projects-psr-fallback";
import type { ProjectBentoSize } from "@/app/lib/project-bento";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkGithub: string;
  linkDeploy: string;
  technologies: string[];
  dateLabel: string;
  problem?: string;
  solution?: string;
  result?: string;
  bentoSize?: ProjectBentoSize;
};

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  linkGithub,
  linkDeploy,
  technologies,
  dateLabel,
  problem,
  solution,
  result,
  bentoSize = "md",
}: ProjectCardProps) {
  const psr = getProjectPsr(title, { problem, solution, result });

  return (
    <StaggerItem className={`project-bento-item project-bento-item--${bentoSize}`}>
      <motion.article
        className={`project-card project-card--bento project-card--${bentoSize}`}
        data-cursor="card"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
      >
        <div className="project-card-media">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 60vw, 50vw"
          />
          <div className="project-card-media-shade" aria-hidden="true" />
        </div>

        <div className="project-card-body">
          <div className="project-card-header">
            <h3 className="project-card-title" data-cursor="title">
              {title}
            </h3>
            {dateLabel ? <span className="project-card-date">{dateLabel}</span> : null}
          </div>

          {psr && (bentoSize === "lg" || bentoSize === "md") ? (
            <div className="project-psr project-psr--compact">
              <div className="project-psr-item">
                <span className="project-psr-label">Problema</span>
                <p>{psr.problem}</p>
              </div>
              <div className="project-psr-item">
                <span className="project-psr-label">Solução</span>
                <p>{psr.solution}</p>
              </div>
              <div className="project-psr-item">
                <span className="project-psr-label">Resultado</span>
                <p>{psr.result}</p>
              </div>
            </div>
          ) : (
            <p className="project-card-summary">{psr ? psr.result : description}</p>
          )}

          <div className="project-card-tags">
            {technologies.slice(0, bentoSize === "sm" ? 3 : 5).map((tech) => (
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
      </motion.article>
    </StaggerItem>
  );
}
