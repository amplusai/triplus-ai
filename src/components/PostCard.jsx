import Link from "next/link";

export default function PostCard({ category, title, description, slug, image }) {
  const content = (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition group-hover:brightness-110"
        />
      )}

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
