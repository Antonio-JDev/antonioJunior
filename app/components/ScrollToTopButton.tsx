"use client";

import { useEffect, useState } from "react";
import { HiOutlineChevronUp } from "react-icons/hi";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={`fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-[#1d4ed8] to-[#38bdf8] text-white shadow-lg transition-all duration-300 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <HiOutlineChevronUp className="text-xl" />
    </button>
  );
}
