"use client";

import { useState } from "react";
import { getRecommendation } from "@/lib/recommend";

export default function RecommendClient() {
  const [keyword, setKeyword] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const handleRecommend = () => {
    if (!keyword.trim()) return;
    setResult(getRecommendation(keyword));
    setShowResult(true);
  };

  return (
    <>
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
        <label className="mb-4 block text-sm font-semibold text-blue-300">
          여행 스타일 입력
        </label>

        <div className="flex flex-col gap-4 md:flex-row">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleRecommend()}
            type="text"
            placeholder="예: 도쿄 자유여행 3박4일 맛집 중심"
            className="flex-1 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-400"
          />

          <button
            onClick={handleRecommend}
            className="rounded-2xl bg-blue-500 px-8 py-4 font-semibold transition hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/30"
          >
            AI 추천 받기
          </button>
        </div>
      </div>

      {showResult && result && (
        <div className="mt-10">
          <p className="mb-6 text-sm text-blue-300">
            입력한 여행 스타일: <span className="text-white">{keyword}</span>
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            <ResultCard title="추천 도시" content={result.city} />
            <ResultCard title="추천 호텔" content={result.hotel} />
            <ResultCard title="추천 투어" content={result.tour} />
            <ResultCard title="추천 일정" content={result.schedule} />
          </div>
        </div>
      )}
    </>
  );
}

function ResultCard({ title, content }) {
  return (
    <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-6">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="leading-7 text-slate-300">{content}</p>
    </div>
  );
}
