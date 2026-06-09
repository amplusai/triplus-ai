import AffiliateBanner from "@/components/AffiliateBanner";
import HomeSearchClient from "@/components/HomeSearchClient";
import { getPosts } from "@/lib/wordpress";

export const metadata = {
  title: "Amplus AI — 여행 검색 플랫폼",
  description: "도시·관광지·국가를 검색하면 여행 가이드·항공권·호텔·투어 정보를 한 번에 확인할 수 있습니다.",
};

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <HomeSearchClient posts={posts} />
      <AffiliateBanner />
    </main>
  );
}
