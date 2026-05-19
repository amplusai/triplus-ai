import Link from "next/link";

export default function TravelCard({ country, title, description, slug }) {
  return (
    <Link href={`/travel/${slug}`}>
      <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/10">
        <p className="mb-3 text-sm text-blue-400">{country}</p>
        <h3 className="mb-3 text-2xl font-bold">{title}</h3>
        <p className="text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </Link>
  );
}
