# ⚛️ React Query Study

TanStack Query(React Query)의 주요 개념과 사용 방법을 학습하고 실습한 내용을 정리한 저장소입니다.  
여러 예제 프로젝트를 통해 데이터 fetching, 캐싱, Infinite Query 등의 기능을 학습합니다.

---

# 📚 Table of Contents

- [학습 목표](#-학습-목표)
- [학습 내용](#-학습-내용)
- [프로젝트 구조](#-프로젝트-구조)
- [실행 방법](#-실행-방법)
- [사용 기술](#-사용-기술)

---

# 🎯 학습 목표

이 프로젝트는 TanStack Query(React Query)를 활용한 데이터 fetching 패턴을 이해하고  
React 애플리케이션에서 서버 상태(Server State)를 효율적으로 관리하는 방법을 학습하기 위해 진행되었습니다.

학습을 통해 다음 내용을 이해하는 것을 목표로 합니다.

- React Query의 기본 개념 이해
- `useQuery`를 활용한 데이터 fetching
- Query Key 기반 캐싱 전략 이해
- `select` 옵션을 활용한 데이터 가공
- Infinite Query를 활용한 무한 스크롤 구현
- 서버 상태(Server State) 관리 패턴 학습

---

# 🧩 학습 내용

## 1️⃣ React Query 기본 개념

React Query는 서버 상태(Server State)를 관리하기 위한 라이브러리로  
데이터 fetching, 캐싱, 동기화 등을 자동으로 처리합니다.

학습 내용

- Server State vs Client State 개념 이해
- Query Key 기반 캐싱
- Background Refetching
- Stale Time과 Cache Time
- 자동 데이터 동기화

---

## 2️⃣ useQuery

`useQuery`는 데이터를 가져오는 가장 기본적인 React Query Hook입니다.

학습 내용

- 기본 데이터 fetching
- Loading / Error 상태 관리
- Query Key 설계
- 캐시된 데이터 재사용
- 자동 refetch 동작 이해

예시

```jsx
const { data, isLoading, error } = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos
});
```

---

## 3️⃣ Query Options

React Query는 다양한 옵션을 통해 데이터 fetching 동작을 제어할 수 있습니다.

학습 내용

- `staleTime`
- `cacheTime`
- `refetchOnWindowFocus`
- `refetchOnMount`
- `enabled`

---

## 4️⃣ select 옵션

`select` 옵션을 사용하면 API에서 받은 데이터를 원하는 형태로 가공할 수 있습니다.

학습 내용

- 데이터 필터링
- 데이터 변환
- 컴포넌트에서 필요한 데이터만 전달

예시

```jsx
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  select: (data) => data.map(user => user.name)
});
```

---

## 5️⃣ Infinite Query

`useInfiniteQuery`는 페이지 기반 데이터 로딩이나 무한 스크롤 구현에 사용됩니다.

학습 내용

- 페이지 기반 데이터 로딩
- `nextPageParam` 처리
- `fetchNextPage`
- `hasNextPage`

예시

```jsx
const {
  data,
  fetchNextPage,
  hasNextPage
} = useInfiniteQuery({
  queryKey: ["species"],
  queryFn: fetchSpecies
});
```

---

## 6️⃣ 데이터 캐싱 전략

React Query는 데이터를 자동으로 캐싱하고 관리합니다.

학습 내용

- Query Key 기반 캐싱
- Stale 상태 관리
- Background refetch
- 캐시된 데이터 재사용

---

## 7️⃣ 실습 프로젝트

학습한 내용을 다양한 예제 프로젝트로 실습했습니다.

예시

- SWAPI 데이터를 활용한 Infinite Query
- 데이터 필터링 예제
- Query 옵션 동작 확인

---

# 📂 프로젝트 구조

```
react-query-study
├ base-blog-em
├ base-infinite-swapi
├ base-lazy-days
├ completed-apps
├ legacy-v3-code
├ section-start-code
├ src
├ public
├ package.json
├ vite.config.js
└ README.md
```

---

# ⚙️ 실행 방법

## 1️⃣ 패키지 설치

```bash
npm install
```

## 2️⃣ 개발 서버 실행

```bash
npm run dev
```

---

# 🛠 사용 기술

- React
- TanStack Query (React Query)
- Vite
- JavaScript
- SWAPI (Star Wars API)
