"use client";

import Link from "next/link";
import { useState } from "react";

function CardImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-48 w-full items-center justify-center bg-slate-800 text-slate-600 text-3xl">
        ✈️
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-48 w-full object-cover transition group-hover:brightness-110"
    />
  );
}

export default function PostCard({ category, title, description, slug, image }) {
  const content = (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">
      <CardImage src={image} alt={title} />

      <div className="p-6">
        <p className="mb-3 text-sm text-blue-400">{category}</p>
        <h3 className="mb-3 text-xl font-bold leading-snug">{title}</h3>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </div>
  );

  if (slug) {
    return <Link href={`/blog/${slug}`}>{content}</Link>;
  }

  return content;
}
