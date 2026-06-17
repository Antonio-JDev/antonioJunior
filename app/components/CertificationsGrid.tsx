"use client";

import type { CertificationRecord } from "@/app/lib/certifications";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { HiX } from "react-icons/hi";

type CertificationsGridProps = {
  certifications: CertificationRecord[];
};

export function CertificationsGrid({ certifications }: CertificationsGridProps) {
  const [activeImage, setActiveImage] = useState<{ url: string; alt: string } | null>(null);

  const closeModal = useCallback(() => setActiveImage(null), []);

  useEffect(() => {
    if (!activeImage) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImage, closeModal]);

  if (certifications.length === 0) {
    return (
      <p className="mt-4 rounded-xl border border-dashed border-white/15 px-4 py-6 text-center text-sm text-muted">
        Nenhum certificado cadastrado ainda.
      </p>
    );
  }

  return (
    <>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {certifications.map((item) => (
          <article
            key={String(item._id)}
            className="certification-card overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]"
          >
            <button
              type="button"
              className="certification-thumb group relative block h-36 w-full cursor-zoom-in overflow-hidden border-b border-white/[0.06] bg-black/20"
              onClick={() => setActiveImage({ url: item.imageUrl, alt: item.courseName })}
              aria-label={`Ampliar certificado de ${item.courseName}`}
            >
              <Image src={item.imageUrl} alt={item.courseName} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" unoptimized />
              <span className="pointer-events-none absolute inset-0 bg-sky-400/0 transition group-hover:bg-sky-400/10" />
            </button>
            <div className="p-4">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-foreground">{item.courseName}</p>
                {item.displayDate?.trim() ? <span className="text-xs text-accent">{item.displayDate}</span> : null}
              </div>
              {item.workload?.trim() ? <p className="mt-1 text-xs font-medium text-sky-300/90">{item.workload}</p> : null}
              <p className="mt-2 text-xs leading-relaxed text-muted">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      {activeImage ? (
        <div
          className="certification-modal-backdrop fixed inset-0 z-[120] flex items-center justify-center bg-black/82 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Certificado: ${activeImage.alt}`}
          onClick={closeModal}
        >
          <button
            type="button"
            className="certification-modal-close absolute right-4 top-4 z-[121] inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white transition hover:border-sky-300/40 hover:bg-black/75"
            onClick={closeModal}
            aria-label="Fechar visualizacao do certificado"
          >
            <HiX className="text-xl" />
          </button>
          <div
            className="certification-modal-content relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#050914] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative max-h-[88vh] min-h-[240px] w-full">
              <Image
                src={activeImage.url}
                alt={activeImage.alt}
                width={1600}
                height={1200}
                className="h-auto max-h-[88vh] w-full object-contain"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
