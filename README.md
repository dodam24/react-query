# ⚛️ React Query Study

![react](https://img.shields.io/badge/react-18-blue)
![tanstack-query](https://img.shields.io/badge/tanstack-query-orange)
![vite](https://img.shields.io/badge/vite-build%20tool-purple)

TanStack Query(React Query)의 주요 개념과 사용 방법을 학습하고 실습한 내용을 정리한 저장소입니다.  
여러 예제 프로젝트를 통해 데이터 fetching, 캐싱, Infinite Query 등의 기능을 학습합니다.

---

# 📚 Table of Contents

- [🎯 학습 목표](#-학습-목표)
- [🧩 학습 내용](#-학습-내용)
- [📂 프로젝트 구조](#-프로젝트-구조)
- [⚙️ 실행 방법](#️-실행-방법)
- [🛠 사용 기술](#-사용-기술)

---

# 🎯 학습 목표

이 프로젝트는 TanStack Query(React Query)를 활용한 데이터 fetching 패턴을 이해하고  
React 애플리케이션에서 서버 상태(Server State)를 효율적으로 관리하는 방법을 학습하기 위해 진행되었습니다.

학습을 통해 다음 내용을 이해하는 것을 목표로 합니다.

- React Query의 기본 개념
- `useQuery`를 활용한 데이터 fetching
- Query Key와 캐싱 전략
- `select` 옵션을 통한 데이터 가공
- Infinite Query를 활용한 무한 스크롤 구현
- 서버 상태(Server State) 관리 패턴

---

# 🧩 학습 내용

## 1️⃣ React Query 기본 개념

- 서버 상태(Server State) 관리
- 캐싱(Caching)
- 자동 리패칭(Refetching)
- Query Key

---

## 2️⃣ useQuery

React Query에서 데이터를 가져올 때 사용하는 기본 Hook입니다.

```jsx
const { data, isLoading, error } = useQuery({
  queryKey: ["todos"],
  queryFn: fetchTodos
});
```

---

## 3️⃣ select 옵션

`select` 옵션을 사용하면 가져온 데이터를 원하는 형태로 가공할 수 있습니다.

```jsx
useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
  select: (data) => data.map(user => user.name)
});
```

---

## 4️⃣ Infinite Query

Infinite Query는 페이지 기반 데이터 로딩이나 무한 스크롤 구현에 사용됩니다.

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

---

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
