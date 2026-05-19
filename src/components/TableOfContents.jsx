"use client";

import { useEffect, useState } from "react";

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(".blog-content h2, .blog-content h3")
    );

    const items = elements.map((el, index) => {
      const id = el.id || `heading-${index}`;
      el.id = id;

      return {
        id,
        text: el.innerText,
        level: el.tagName,
      };
    });

    setHeadings(items);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-blue-400">
        TABLE OF CONTENTS
      </p>

      <ul className="space-y-3 text-sm text-slate-300">
        {headings.map((item) => (
          <li
            key={item.id}
            className={item.level === "H3" ? "ml-4" : ""}
          >
            <a href={`#${item.id}`} className="hover:text-blue-400">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
