const travelData = {
  seoul: {
    country: "KOREA",
    title: "서울 여행 가이드",
    description: "한류, 미식, 쇼핑, 야경까지 즐길 수 있는 서울 자유여행 추천 콘텐츠입니다.",
    image: "/images/seoul.jpg",
    points: [
      { label: "추천 지역", content: "명동, 홍대, 강남, 북촌한옥마을" },
      { label: "추천 맛집", content: "삼겹살, 떡볶이, 치킨, 한강 야식" },
      { label: "추천 숙소", content: "명동 비즈니스호텔, 강남 서비스드 레지던스, 1박 12만원대" },
      { label: "추천 일정", content: "1일차 명동·광화문 / 2일차 홍대·연남동 / 3일차 강남·한강" },
    ],
  },
  tokyo: {
    country: "JAPAN",
    title: "도쿄 여행 가이드",
    description: "맛집, 쇼핑, 감성 카페 중심의 도쿄 자유여행 추천 콘텐츠입니다.",
    image: "/images/tokyo.jpg",
    points: [
      { label: "추천 지역", content: "신주쿠, 시부야, 하라주쿠, 이케부쿠로" },
      { label: "추천 맛집", content: "라멘, 스시, 야키토리, 편의점 간식" },
      { label: "추천 숙소", content: "신주쿠 역세권 비즈니스호텔, 1박 10만원대" },
      { label: "추천 일정", content: "1일차 시부야 / 2일차 아사쿠사 / 3일차 하라주쿠" },
    ],
  },
  jeju: {
    country: "KOREA",
    title: "제주 여행 가이드",
    description: "오션뷰 숙소, 드라이브 코스, 감성 카페 중심의 제주 여행 콘텐츠입니다.",
    image: "/images/jeju.jpg",
    points: [
      { label: "추천 지역", content: "성산일출봉, 협재해변, 우도, 한라산" },
      { label: "추천 맛집", content: "흑돼지, 전복죽, 갈치조림, 감귤 디저트" },
      { label: "추천 숙소", content: "오션뷰 풀빌라, 감성 게스트하우스, 1박 15만원대" },
      { label: "추천 일정", content: "1일차 동부(성산) / 2일차 서부(협재) / 3일차 한라산" },
    ],
  },
  bangkok: {
    country: "THAILAND",
    title: "방콕 여행 가이드",
    description: "가성비 호텔, 야시장, 투어 중심의 방콕 자유여행 추천 콘텐츠입니다.",
    image: "/images/bangkok.jpg",
    points: [
      { label: "추천 지역", content: "카오산로드, 짜뚜짝 시장, 시암, 차이나타운" },
      { label: "추천 맛집", content: "팟타이, 똠양꿍, 망고찹쌀밥, 야시장 꼬치" },
      { label: "추천 숙소", content: "수영장 포함 리조트, 역세권 호텔, 1박 8만원대" },
      { label: "추천 일정", content: "1일차 왕궁·사원 / 2일차 야시장 / 3일차 쇼핑몰" },
    ],
  },
  barcelona: {
    country: "SPAIN",
    title: "바르셀로나 여행 가이드",
    description: "가우디 건축, 지중해 해변, 맛집 투어 중심의 스페인 대표 여행지 추천 콘텐츠입니다.",
    image: "/images/barcelona.jpg",
    points: [
      { label: "추천 지역", content: "사그라다 파밀리아, 구엘 공원, 람블라스 거리, 바르셀로네타 해변" },
      { label: "추천 맛집", content: "파에야, 타파스, 피카피카, 보케리아 시장 신선 과일" },
      { label: "추천 숙소", content: "고딕 지구 부티크 호텔, 해변 인근 리조트, 1박 20만원대" },
      { label: "추천 일정", content: "1일차 사그라다 파밀리아·구엘 공원 / 2일차 람블라스·고딕 지구 / 3일차 해변·쇼핑" },
    ],
  },
  warsaw: {
    country: "POLAND",
    title: "바르샤바 여행 가이드",
    description: "역사 구시가지, 현대 문화, 동유럽 감성이 공존하는 폴란드 수도 추천 콘텐츠입니다.",
    image: "/images/warsaw.jpg",
    points: [
      { label: "추천 지역", content: "구시가지 광장, 바르샤바 봉기 박물관, 위라노프 궁전, 비스와 강변" },
      { label: "추천 맛집", content: "피에로기, 주렉, 비고스, 전통 폴란드 음식점" },
      { label: "추천 숙소", content: "구시가지 인근 부티크 호텔, 시내 중심 비즈니스호텔, 1박 10만원대" },
      { label: "추천 일정", content: "1일차 구시가지·왕궁 / 2일차 봉기 박물관·쇼팽 공원 / 3일차 위라노프 궁전·쇼핑" },
    ],
  },
  gdansk: {
    country: "POLAND",
    title: "그단스크 여행 가이드",
    description: "발트해 항구 도시, 중세 구시가지, 호박 공예 중심의 폴란드 해안 여행 콘텐츠입니다.",
    image: "/images/gdansk.jpg",
    points: [
      { label: "추천 지역", content: "들루기 타르그 광장, 성 마리아 성당, 소포트 해변, 몰타 호수" },
      { label: "추천 맛집", content: "훈제 청어, 발트해 해산물, 폴란드 맥주, 호박 아이스크림" },
      { label: "추천 숙소", content: "구시가지 내 호텔, 소포트 해변 리조트, 1박 12만원대" },
      { label: "추천 일정", content: "1일차 구시가지·성당 / 2일차 소포트 해변·피어 / 3일차 호박 박물관·기념품 쇼핑" },
    ],
  },
  versailles: {
    country: "FRANCE",
    title: "베르사유 궁전 여행 가이드",
    description: "루이 14세의 화려한 바로크 궁전과 정원, 파리 근교 필수 명소 추천 콘텐츠입니다.",
    image: "/images/versailles.jpg",
    points: [
      { label: "추천 지역", content: "베르사유 궁전 본관, 거울의 방, 마리 앙투아네트 별궁, 대운하 정원" },
      { label: "추천 맛집", content: "궁전 내 카페, 베르사유 시내 비스트로, 파리 귀환 후 크레페" },
      { label: "추천 숙소", content: "파리 시내 숙박 후 당일치기 추천, 베르사유 시내 B&B" },
      { label: "추천 일정", content: "파리에서 RER C선 40분 / 오전 궁전 내부 / 오후 정원·트리아농 별궁 관람" },
    ],
  },
  cebu: {
    country: "PHILIPPINES",
    title: "세부 여행 가이드",
    description: "스노클링, 고래상어 투어, 흰 모래 해변 중심의 필리핀 대표 휴양지 추천 콘텐츠입니다.",
    image: "/images/cebu.jpg",
    points: [
      { label: "추천 지역", content: "막탄 섬, 오슬롭(고래상어), 모알보알, 세부 시티 구시가지" },
      { label: "추천 맛집", content: "lechon(통돼지 구이), 망고 디저트, 세부 식 스시, 해변 BBQ" },
      { label: "추천 숙소", content: "막탄 섬 비치 리조트, 세부 시티 비즈니스호텔, 1박 10만원대" },
      { label: "추천 일정", content: "1일차 막탄 해변·스노클링 / 2일차 오슬롭 고래상어 투어 / 3일차 모알보알·사르디나스 섬" },
    ],
  },
  tagaytay: {
    country: "PHILIPPINES",
    title: "따가이따이 여행 가이드",
    description: "따알 화산 호수, 선선한 고원 기후, 마닐라 근교 힐링 여행지 추천 콘텐츠입니다.",
    image: "/images/tagaytay.jpg",
    points: [
      { label: "추천 지역", content: "따알 화산 전망대, 따알 호수, 피크닉 그로브, 소니아 가든" },
      { label: "추천 맛집", content: "불로&불로 레스토랑, 아마니다, 타알 라쿠스타 호텔 뷔페, 불로&불로 불낙지" },
      { label: "추천 숙소", content: "화산 뷰 리조트, 고원 부티크 호텔, 1박 12만원대" },
      { label: "추천 일정", content: "마닐라에서 차로 1.5시간 / 오전 따알 화산 트레킹 / 오후 전망대·카페 투어" },
    ],
  },
  halong: {
    country: "VIETNAM",
    title: "하롱베이 여행 가이드",
    description: "석회암 기암절벽과 에메랄드 바다, 크루즈 투어 중심의 베트남 대표 절경 추천 콘텐츠입니다.",
    image: "/images/halong.jpg",
    points: [
      { label: "추천 지역", content: "하롱베이 본섬, 티톱 섬, 선동 동굴, 카트바 섬" },
      { label: "추천 맛집", content: "크루즈 선상 해산물 요리, 새우·게·조개 구이, 베트남 쌀국수" },
      { label: "추천 숙소", content: "1박 2일 럭셔리 크루즈, 카트바 섬 리조트, 크루즈 포함 20만원대" },
      { label: "추천 일정", content: "하노이에서 차로 3.5시간 / 1박 2일 크루즈(카약·동굴 탐험 포함) 추천" },
    ],
  },
  heidelberg: {
    country: "GERMANY",
    title: "하이델베르크 여행 가이드",
    description: "고성과 네카어 강변, 유럽 최고의 낭만주의 대학 도시 추천 콘텐츠입니다.",
    image: "/images/heidelberg.jpg",
    points: [
      { label: "추천 지역", content: "하이델베르크 성, 철학자의 길, 구시가지 마르크트 광장, 네카어 강변" },
      { label: "추천 맛집", content: "슈니첼, 플람쿠헨, 독일 맥주, 구시가지 카페 케이크" },
      { label: "추천 숙소", content: "구시가지 내 호텔, 프랑크푸르트 당일치기 가능, 1박 15만원대" },
      { label: "추천 일정", content: "오전 하이델베르크 성 / 오후 철학자의 길·구시가지 산책 / 저녁 강변 레스토랑" },
    ],
  },
  venice: {
    country: "ITALY",
    title: "베네치아 여행 가이드",
    description: "수상 도시, 곤돌라, 산 마르코 광장 중심의 이탈리아 낭만 여행지 추천 콘텐츠입니다.",
    image: "/images/venice.jpg",
    points: [
      { label: "추천 지역", content: "산 마르코 광장, 리알토 다리, 부라노 섬, 무라노 섬" },
      { label: "추천 맛집", content: "바칼라 만테카토, 세피에 알 네로, 티라미수, 젤라토" },
      { label: "추천 숙소", content: "운하 뷰 부티크 호텔, 메스트레 역 인근 호텔, 1박 25만원대" },
      { label: "추천 일정", content: "1일차 산 마르코 광장·두칼레 궁전 / 2일차 리알토 시장·곤돌라 / 3일차 부라노·무라노 섬" },
    ],
  },
  louvre: {
    country: "FRANCE",
    title: "루브르 박물관 여행 가이드",
    description: "모나리자, 밀로의 비너스 등 세계 최대 미술관 파리 핵심 여행지 추천 콘텐츠입니다.",
    image: "/images/louvre.jpg",
    points: [
      { label: "추천 지역", content: "드농관(모나리자), 쉴리관(이집트 유물), 리슐리외관, 유리 피라미드 광장" },
      { label: "추천 맛집", content: "루브르 지하 카페, 팔레 루아얄 레스토랑, 인근 튈르리 공원 피크닉" },
      { label: "추천 숙소", content: "생제르맹 부티크 호텔, 오페라 지구 중급 호텔, 1박 25만원대" },
      { label: "추천 일정", content: "1일차 루브르 오전 입장(예약 필수)·오후 세느강 산책 / 2일차 오르세 미술관 연계" },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = travelData[slug];

  return {
    title: data ? `${data.title} | Amplus AI` : "Travel | Amplus AI",
    description: data?.description || "AI 기반 여행 추천 콘텐츠입니다.",
  };
}

export default async function TravelDetailPage({ params }) {
  const { slug } = await params;
  const data = travelData[slug];

  if (!data) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
        <section className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold">여행 정보를 찾을 수 없습니다.</h1>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm tracking-[0.3em] text-blue-400">
          {data.country}
        </p>

        <h1 className="mb-6 text-5xl font-bold">{data.title}</h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          {data.description}
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <img
            src={data.image}
            alt={data.title}
            className="h-[360px] w-full object-cover"
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.points.map((point) => (
            <div
              key={point.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h2 className="mb-3 text-sm tracking-[0.2em] text-blue-400">
                {point.label}
              </h2>
              <p className="leading-8 text-slate-300">{point.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://www.trip.com/t/i9ciUFxglU2"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-blue-500 px-6 py-4 font-semibold transition hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/30"
          >
            호텔 예약하기
          </a>

          <a
            href="https://affiliate.klook.com/redirect?aid=120107&aff_adid=1280570&k_site=https%3A%2F%2Fwww.klook.com%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 px-6 py-4 font-semibold transition hover:border-blue-400"
          >
            투어 보기
          </a>

          <a
            href="https://www.trip.com/t/i9ciUFxglU2"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 px-6 py-4 font-semibold transition hover:border-blue-400"
          >
            항공권 비교
          </a>
        </div>
      </section>
    </main>
  );
}
