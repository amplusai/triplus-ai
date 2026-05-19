"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";

const POSTS_PER_PAGE = 6;

const categoryMap = {
  1: "전체",
  3: "AI 여행 인사이트",
  4: "여행 뉴스",
  5: "여행 준비물",
  6: "여행지 가이드",
};

function stripHtml(html = "") {
  return html.replace(/<[^>]+>/g, "");
}

function getFeaturedImage(post) {
  return post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

function getCategoryLabel(post) {
  const id = post.categories?.[0];
  return categoryMap[id] ?? "여행 콘텐츠";
}

export default function BlogSearchClient({ posts }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [page, setPage] = useState(1);

  const categoryIds = [
    null,
    ...Array.from(
      new Set(posts.flatMap((p) => p.categories ?? []).filter((id) => categoryMap[id]))
    ),
  ];

  const filteredPosts = posts.filter((post) => {
    const title = stripHtml(post.title?.rendered || "");
    const excerpt = stripHtml(post.excerpt?.rendered || "");
    const text = `${title} ${excerpt}`.toLowerCase();

    const matchesQuery = text.includes(query.toLowerCase());
    const matchesCategory =
      activeCategory === null || post.categories?.includes(activeCategory);

    return matchesQuery && matchesCategory;
  });

  const start = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handleFilter = (id) => {
    setActiveCategory(id);
    setPage(1);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <>
      {/* 검색창 */}
      <div className="mb-8 max-w-xl">
        <input
          value={query}
          onChange={handleSearch}
          placeholder="도쿄, 제주, ChatGPT 검색"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-blue-400"
        />
      </div>

      {/* 카테고리 필터 */}
      <div className="mb-10 flex flex-wrap gap-3">
        {categoryIds.map((id) => {
          const label = id === null ? "전체" : categoryMap[id];
          const isActive = activeCategory === id;

          return (
            <button
              key={id ?? "all"}
              onClick={() => handleFilter(id)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-blue-400 text-blue-400"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* 카드 그리드 */}
      <div className="grid gap-6 md:grid-cols-3">
        {paginatedPosts.map((post) => {
          const title = stripHtml(post.title?.rendered || "");
          const excerpt = stripHtml(post.excerpt?.rendered || "").slice(0, 120);
          const image = getFeaturedImage(post);

          return (
            <PostCard
              key={post.id}
              category={getCategoryLabel(post)}
              title={title}
              description={excerpt}
              slug={post.slug}
              image={image}
            />
          );
        })}
      </div>

      {filteredPosts.length === 0 && (
        <p className="mt-10 text-slate-400">검색 결과가 없습니다.</p>
      )}

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`h-10 w-10 rounded-xl border transition ${
                page === index + 1
                  ? "border-blue-400 bg-blue-500 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-blue-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
