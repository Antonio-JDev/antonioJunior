"use client";

import { Stagger } from "@/app/components/motion/Reveal";
import type { ReactNode } from "react";

export function ProjectsGridClient({ children }: { children: ReactNode }) {
  return (
    <Stagger className="projects-bento" stagger={0.08}>
      {children}
    </Stagger>
  );
}
