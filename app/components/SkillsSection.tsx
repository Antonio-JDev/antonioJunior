"use client";

import { Reveal } from "@/app/components/motion/Reveal";
import { SectionShell } from "@/app/components/SectionShell";
import { SkillsHub } from "@/app/components/SkillsHub";

export function SkillsSection() {
  return (
    <SectionShell id="skills" title="Tecnologias" subtitle="Stack utilizada para construir soluções robustas e escaláveis">
      <Reveal>
        <SkillsHub />
      </Reveal>
    </SectionShell>
  );
}
