"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

export function TypewriterText({
  words,
  typingSpeed = 85,
  deletingSpeed = 55,
  pauseMs = 1800,
}: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && displayed === currentWord) {
      const pause = window.setTimeout(() => setIsDeleting(true), pauseMs);
      return () => window.clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = window.setTimeout(
      () => {
        const nextLength = isDeleting ? displayed.length - 1 : displayed.length + 1;
        setDisplayed(currentWord.slice(0, nextLength));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => window.clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="typewriter-text" aria-live="polite">
      {displayed}
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
