const recommendations = [
  {
    keywords: ["도쿄", "일본", "오사카", "후쿠오카"],
    city: "도쿄 / 오사카 / 후쿠오카",
    hotel: "신주쿠 역세권, 조식 포함, 1박 10만원대",
    tour: "시티투어, 맛집투어, 야경투어",
    schedule: "1일차 도심 / 2일차 맛집 / 3일차 쇼핑",
  },
  {
    keywords: ["방콕", "태국", "치앙마이", "푸켓"],
    city: "방콕 / 치앙마이 / 푸켓",
    hotel: "수영장 포함, 리조트, 1박 8만원대",
    tour: "왕궁투어, 야시장투어, 스파투어",
    schedule: "1일차 왕궁 / 2일차 야시장 / 3일차 리조트",
  },
  {
    keywords: ["파리", "유럽", "로마", "바르셀로나"],
    city: "파리 / 로마 / 바르셀로나",
    hotel: "부티크 호텔, 시내 중심, 1박 20만원대",
    tour: "미술관투어, 야경투어, 음식투어",
    schedule: "1일차 루브르 / 2일차 에펠탑 / 3일차 쇼핑",
  },
  {
    keywords: ["제주", "국내", "부산", "강릉"],
    city: "제주 / 부산 / 강릉",
    hotel: "풀빌라, 오션뷰, 1박 15만원대",
    tour: "올레길, 해안드라이브, 카페투어",
    schedule: "1일차 동부 / 2일차 서부 / 3일차 한라산",
  },
  {
    keywords: ["뉴욕", "미국", "LA", "샌프란시스코"],
    city: "뉴욕 / LA / 샌프란시스코",
    hotel: "맨해튼 중심, 비즈니스호텔, 1박 25만원대",
    tour: "자유의여신상, 센트럴파크, 브로드웨이",
    schedule: "1일차 맨해튼 / 2일차 브루클린 / 3일차 쇼핑",
  },
  {
    keywords: ["싱가포르", "말레이시아", "발리", "인도네시아"],
    city: "싱가포르 / 발리 / 쿠알라룸푸르",
    hotel: "마리나베이, 리조트, 1박 12만원대",
    tour: "가든스바이더베이, 우붓, 트윈타워",
    schedule: "1일차 시내 / 2일차 자연 / 3일차 리조트",
  },
];

const fallback = {
  city: "목적지를 키워드로 입력해보세요",
  hotel: "예산과 조건을 함께 입력하면 더 정확합니다",
  tour: "맛집, 쇼핑, 자연 등 취향을 추가해보세요",
  schedule: "기간을 입력하면 일정을 추천합니다",
};

export function getRecommendation(keyword) {
  const matched = recommendations.find((r) =>
    r.keywords.some((k) => keyword.includes(k))
  );

  if (!matched) return fallback;

  const { city, hotel, tour, schedule } = matched;
  return { city, hotel, tour, schedule };
}
