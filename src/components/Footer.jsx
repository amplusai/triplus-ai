import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-16 text-white">

      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-blue-400">
            Amplus AI
          </h2>

          <p className="leading-7 text-slate-400">
            AI 기반 스마트 여행 추천 플랫폼.
            <br />
            여행 콘텐츠와 예약 서비스를 제공합니다.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            메뉴
          </h3>

          <div className="flex flex-col gap-3 text-slate-400">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>

            <Link href="/travel" className="hover:text-blue-400">
              Travel
            </Link>

            <Link href="/blog" className="hover:text-blue-400">
              Blog
            </Link>

            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            안내
          </h3>

          <div className="flex flex-col gap-3 text-slate-400">
            <p>회사 소개</p>
            <a href="mailto:contact@amplusai.com" className="hover:text-blue-400">
              contact@amplusai.com
            </a>
            <p>제휴 안내</p>
            <p>개인정보처리방침</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 Amplus AI. All rights reserved.
      </div>
    </footer>
  );
}
