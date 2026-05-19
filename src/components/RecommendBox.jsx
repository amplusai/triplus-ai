import Link from "next/link";

const categories = ["전체", "일본", "동남아", "유럽", "국내", "미국"];

export default function RecommendBox() {
  return (
    <section className="px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          AI RECOMMEND
        </p>

        <h2 className="mb-6 text-3xl font-bold">AI 여행 추천</h2>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium transition hover:border-blue-400 hover:text-blue-400"
            >
              {cat}
            </button>
          ))}
        </div>

        <Link
          href="/recommend"
          className="inline-block rounded-2xl bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/30"
        >
          AI 추천 받기 →
        </Link>
      </div>
    </section>
  );
}
