const deals = [
  {
    label: "항공권 특가",
    badge: "최대 40% 할인",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    label: "호텔 특가",
    badge: "오늘만 특가",
    color: "from-cyan-500/20 to-cyan-600/10",
  },
  {
    label: "투어 패키지",
    badge: "AI 추천 1위",
    color: "from-indigo-500/20 to-indigo-600/10",
  },
];

export default function AffiliateBanner() {
  return (
    <section className="px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          PARTNER DEALS
        </p>

        <h2 className="mb-10 text-3xl font-bold">파트너 특가</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.label}
              className={`flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r ${deal.color} p-6 transition hover:border-blue-400/40`}
            >
              <span className="text-lg font-semibold">{deal.label}</span>
              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">
                {deal.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
