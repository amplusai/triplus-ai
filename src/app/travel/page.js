import TravelCard from "@/components/TravelCard";

export const metadata = {
  title: "Travel | Amplus AI",
  description: "AI가 추천하는 여행지, 항공권, 호텔, 투어 정보를 확인하세요.",
};

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          TRAVEL
        </p>

        <h1 className="mb-6 text-5xl font-bold">AI 여행 추천</h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          도시별 여행 정보, 일정 추천, 항공권·호텔·투어 콘텐츠를 제공합니다.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <TravelCard
            country="JAPAN"
            title="도쿄 여행"
            description="맛집, 쇼핑, 감성 카페 중심의 도쿄 자유여행 추천 콘텐츠"
            slug="tokyo"
          />

          <TravelCard
            country="KOREA"
            title="제주 여행"
            description="오션뷰, 드라이브 코스, 감성 숙소 중심 제주 여행"
            slug="jeju"
          />

          <TravelCard
            country="THAILAND"
            title="방콕 여행"
            description="가성비 호텔과 야시장 중심의 방콕 여행 추천"
            slug="bangkok"
          />
        </div>
      </section>
    </main>
  );
}
