export const metadata = {
  title: "About | Amplus AI",
  description: "Amplus AI는 AI 기반 스마트 여행 추천 플랫폼입니다.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">

      <section className="mx-auto max-w-5xl">

        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          ABOUT
        </p>

        <h1 className="mb-8 text-5xl font-bold">
          AI 기반 스마트 여행 플랫폼
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Amplus AI는 여행자의 목적, 취향, 예산에 맞춰
          최적의 여행 콘텐츠를 추천하는 AI 여행 플랫폼입니다.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="mb-4 text-2xl font-bold">
              ✈️ AI 여행 추천
            </h3>
            <p className="leading-7 text-slate-300">
              여행 스타일과 예산에 맞춘 맞춤형 여행 콘텐츠 추천 시스템
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="mb-4 text-2xl font-bold">
              🏨 스마트 예약
            </h3>
            <p className="leading-7 text-slate-300">
              항공권, 호텔, 투어를 AI 기반으로 비교하고 탐색합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="mb-4 text-2xl font-bold">
              🌎 글로벌 여행 콘텐츠
            </h3>
            <p className="leading-7 text-slate-300">
              세계 여행 정보와 AI 기반 여행 인사이트를 제공합니다.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
