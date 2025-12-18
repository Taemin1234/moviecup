# 🎬 영화 이상형 월드컵 (Movie World Cup)

TMDB API를 활용한 인터랙티브 영화 선택 웹 애플리케이션

<br />

## 📋 프로젝트 소개

사용자가 원하는 조건(장르, 언어, 개봉 연도)에 맞는 영화를 필터링하고, 토너먼트 방식의 이상형 월드컵을 통해 자신에게 가장 이상적인 영화를 선정할 수 있는 웹 애플리케이션입니다. 선정된 우승 영화는 명예의 전당에 기록되어 히스토리를 관리할 수 있습니다.

<br />

## ✨ 주요 기능

### 1. 영화 필터링 시스템
- **장르 선택**: 액션, 코미디, 드라마 등 다양한 장르 중 다중 선택 가능
- **언어 필터**: 한국어, 영어, 일본어 등 원본 언어별 필터링
- **연도 범위 설정**: 시작 연도와 종료 연도를 지정하여 특정 시기의 영화 검색

### 2. 무한 스크롤 영화 목록
- Intersection Observer API를 활용한 무한 스크롤 구현
- 스크롤 시 자동으로 다음 페이지 데이터 로딩
- 로딩 상태 및 에러 처리 UI 제공

### 3. 영화 월드컵
- 16강 토너먼트 방식으로 진행
- 실시간 진행 상황 표시 (현재 라운드 / 전체)
- 우승 시 Confetti 효과로 축하 연출
- 선택한 영화 간 비교 및 우승자 선정

### 4. 명예의 전당 (Hall of Fame)
- 역대 우승 영화 기록 보관
- 우승 날짜 정보 저장
- 포스터와 제목으로 시각적 히스토리 제공

<br />

## 🛠️ 기술 스택

### **Frontend Core**
- **React 18.3.1**
  - 컴포넌트 기반 UI 구축
  - Virtual DOM을 통한 효율적인 렌더링
  - Hooks를 활용한 상태 관리 및 사이드 이펙트 처리

### **상태 관리**
- **Redux Toolkit 2.2.7**
  - 전역 상태 관리 (장르, 언어, 연도, 월드컵 목록, 우승자 데이터)
  - Slice 패턴으로 관심사 분리 및 코드 구조화
  - Immer 기반 불변성 관리로 안전한 상태 업데이트

### **데이터 패칭**
- **TanStack Query (React Query) 5.51.5**
  - TMDB API 비동기 데이터 패칭 및 캐싱
  - useInfiniteQuery를 통한 무한 스크롤 구현
  - 자동 백그라운드 리패칭 및 에러 리트라이
  - DevTools를 통한 쿼리 상태 모니터링

### **스타일링**
- **styled-components 6.1.12**
  - CSS-in-JS 방식의 컴포넌트 스타일링
  - Props 기반 동적 스타일링
  - 전역 스타일 관리 (GlobalStyle, styled-reset)

### **라우팅**
- **react-router-dom 6.24.1**
  - 메인 페이지와 명예의 전당 간 페이지 전환
  - SPA 구조로 빠른 페이지 이동

### **기타 라이브러리**
- **react-confetti 6.1.0**
  - 월드컵 우승 시 축하 애니메이션 효과
- **dotenv 16.4.5**
  - TMDB API Key 환경변수 관리

<br />

## 🔧 주요 구현 내용

### 1. Redux를 활용한 전역 상태 관리

**5개의 Slice로 상태 분리 관리:**

```javascript
// store/store.js
export default configureStore({
  reducer: {
    genre : genreReducer,        // 선택된 장르 목록
    year : yearReducer,           // 시작/종료 연도
    language : langReducer,       // 선택된 언어
    worldcup : worldcupReducer,   // 월드컵 진행용 영화 16개
    winner : winnerReducer        // 역대 우승 영화 목록
  }
})
```

**사용 이유:**
- 여러 컴포넌트에서 공유되는 필터 조건을 중앙 집중식으로 관리
- Props Drilling 방지
- 월드컵과 명예의 전당 간 데이터 공유 용이

### 2. React Query를 활용한 서버 상태 관리

**무한 스크롤 구현:**

```javascript
// components/MovieInfo.js
const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } = 
  useInfiniteQuery({
    queryKey: ['movieList', with_genres, with_original_language, start_year, end_year],
    queryFn: ({ pageParam = 1 }) => getPosts({ pageParam, ...filters }),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    }
  });
```

**사용 이유:**
- 자동 캐싱으로 동일한 조건의 재검색 시 즉시 응답
- queryKey 변경 시 자동 리패칭으로 필터 변경 반영
- isLoading, isError 등 상태 값 자동 관리
- 페이지네이션 로직 간소화

### 3. Intersection Observer를 활용한 무한 스크롤

**마지막 요소 감지 및 자동 로딩:**

```javascript
// components/MovieInfo.js
const lastMovieElementRef = useCallback(node => {
  if (isLoading || isFetchingNextPage) return;
  if (observerElem.current) observerElem.current.disconnect();
  
  observerElem.current = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  });
  
  if (node) observerElem.current.observe(node);
}, [isLoading, isFetchingNextPage, fetchNextPage, hasNextPage]);
```

**사용 이유:**
- 스크롤 이벤트보다 성능 효율적
- 뷰포트 진입 시점을 정확하게 감지
- React Query의 fetchNextPage와 완벽한 연동

### 4. 토너먼트 알고리즘 구현

**16강 → 8강 → 4강 → 결승 진행:**

```javascript
// components/Worldcup.js
const selectedMovie = (m) => () => {
  if(movie.length <= 2) {
    // 결승전 - 우승자 결정
    if(winners.length === 0) {
      setDisplays([m]);
      setTop(true);
      dispatch(addWinner([...m, dateString]));
    } else {
      // 다음 라운드 시작
      let updateMovie = [...winners, m];
      setMovie(updateMovie);
      setDisplays([updateMovie[0], updateMovie[1]]);
      setWinners([]);
    }
  } else {
    // 승자를 winners 배열에 저장하고 다음 매치 진행
    setWinners([...winners, m]);
    setDisplays([movie[2], movie[3]]);
    setMovie(movie.slice(2));
  }
}
```

**사용 이유:**
- 직관적인 토너먼트 방식으로 사용자 선택 유도
- 단계적 비교로 결정 부담 감소
- 라운드별 진행 상황 시각화

### 5. styled-components로 재사용 가능한 UI 컴포넌트

**Props 기반 동적 스타일링:**

```javascript
// style/style.js (예시)
export const Buttons = styled.button`
  background: ${props => props.bg || '#333'};
  margin: ${props => props.margin || '5px'};
  &:hover {
    background: ${props => props.bgh || '#555'};
  }
`;
```

**사용 이유:**
- 컴포넌트와 스타일의 응집도 향상
- Props로 다양한 스타일 변형 가능
- 전역 스타일과 컴포넌트 스타일 분리 관리

### 6. TMDB API 필터링 파라미터 구성

**동적 쿼리 스트링 생성:**

```javascript
// api.js
export async function getPosts({ 
  pageParam = 1, 
  withGenres = '', 
  withOriginalLanguage = '', 
  startYear = '', 
  endYear = '' 
}) {
  const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ko-KR&with_genres=${withGenres}&with_original_language=${withOriginalLanguage}&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31`;
  
  const response = await fetch(`${BASE_URL}&page=${pageParam}`);
  return await response.json();
}
```

**사용 이유:**
- 사용자 선택에 따른 동적 API 요청
- 여러 필터 조건 조합 가능
- 빈 문자열 처리로 선택적 필터 적용

<br />

## 📂 프로젝트 구조

```
moviecup/
├── src/
│   ├── components/           # React 컴포넌트
│   │   ├── GenreCheck.js    # 장르 선택 체크박스
│   │   ├── LanguageSel.js   # 언어 선택 라디오버튼
│   │   ├── YearRange.js     # 연도 범위 선택
│   │   ├── Modal.js         # 필터 설정 모달
│   │   ├── MovieContainer.js # 메인 컨테이너
│   │   ├── MovieInfo.js     # 영화 목록 (무한스크롤)
│   │   ├── MovieItem.js     # 개별 영화 카드
│   │   ├── Worldcup.js      # 월드컵 모달
│   │   ├── Hof.js           # 명예의 전당
│   │   └── IndexBox.js      # 필터 요약 및 시작 버튼
│   ├── store/               # Redux 상태 관리
│   │   ├── store.js         # Store 설정
│   │   ├── genreSlice.js    # 장르 상태
│   │   ├── langSlice.js     # 언어 상태
│   │   ├── yearSlice.js     # 연도 상태
│   │   ├── worldcupSlice.js # 월드컵 영화 목록
│   │   └── winnerSlice.js   # 우승자 목록
│   ├── layout/              # 재사용 UI 컴포넌트
│   │   ├── Button.js
│   │   ├── Chkbox.js
│   │   ├── Radio.js
│   │   └── Header.js
│   ├── style/               # styled-components 스타일
│   │   └── style.js
│   ├── data/                # 정적 데이터
│   │   └── data.js          # 장르/언어 코드
│   ├── api.js               # TMDB API 함수
│   ├── App.js               # 루트 컴포넌트
│   └── index.js             # 앱 진입점
├── public/
│   ├── index.html
│   └── manifest.json
├── package.json
└── README.md
```

<br />

## 🚀 설치 및 실행 방법

### 1. 저장소 클론
```bash
git clone https://github.com/yourusername/moviecup.git
cd moviecup
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 TMDB API 키를 추가합니다:

```env
REACT_APP_API_KEY=your_tmdb_api_key_here
```

> TMDB API 키는 [The Movie Database](https://www.themoviedb.org/settings/api)에서 무료로 발급받을 수 있습니다.

### 4. 개발 서버 실행
```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

### 5. 프로덕션 빌드
```bash
npm run build
```

<br />

## 🎯 핵심 학습 내용

- **React Query**를 활용한 서버 상태 관리와 캐싱 전략
- **Redux Toolkit**을 통한 효율적인 클라이언트 상태 관리
- **Intersection Observer API**를 활용한 무한 스크롤 구현
- **styled-components**를 이용한 컴포넌트 기반 스타일링
- **토너먼트 알고리즘** 설계 및 구현
- RESTful API 호출 및 동적 쿼리 파라미터 처리

<br />

## 🔮 향후 개선 계획

- [ ] 반응형 디자인 최적화 (모바일 대응)
- [ ] 영화 상세 정보 모달 추가
- [ ] LocalStorage를 활용한 필터 설정 및 우승자 기록 영구 저장
- [ ] 32강, 64강 등 다양한 토너먼트 옵션 제공
- [ ] 영화 평점 및 리뷰 정보 추가
- [ ] 소셜 공유 기능 (우승 결과 공유)

<br />

## 📝 라이선스

This project is licensed under the ISC License.

<br />

## 👤 제작자

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!
