"use client";

export default function ShareButtons({ title, slug }) {
  const url = `https://amplusai.com/blog/${slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert("링크가 복사되었습니다.");
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

  return (
    <div className="mt-16 flex gap-4">
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border border-white/10 px-5 py-3 text-sm transition hover:border-blue-400"
      >
        Twitter 공유
      </a>

      <button
        onClick={handleCopy}
        className="rounded-2xl border border-white/10 px-5 py-3 text-sm transition hover:border-blue-400"
      >
        링크 복사
      </button>
    </div>
  );
}
