import Link from "next/link";

export default function BlogCard({ category, title, description, slug }) {
  const content = (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">
      <p className="mb-3 text-sm text-blue-400">
        {category}
      </p>

      <h3 className="mb-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="text-sm leading-7 text-slate-300">
        {description}
      </p>
    </div>
  );

  if (slug) {
    return <Link href={`/blog/${slug}`}>{content}</Link>;
  }

  return content;
}
