"use client";
import { useEffect, useState } from "react";

export default function Typewriter({
  words,
  delay = 150,
}: {
  words: string[];
  delay?: number;
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (deleting) {
          if (subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          } else {
            setSubIndex((prev) => prev - 1);
          }
        } else {
          if (subIndex === words[index].length) {
            setDeleting(true);
          } else {
            setSubIndex((prev) => prev + 1);
          }
        }
      },
      deleting ? delay / 2 : delay
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  return (
    <span className="text-blue-400">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
