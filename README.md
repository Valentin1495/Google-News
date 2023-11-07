# [NYTimes](https://nytimes-nh.vercel.app)

New York Times의 최신 뉴스를 읽고, 검색하고, 저장해 보세요.

![Home page](/public/home_page.png)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **Database:** [Firebase](https://firebase.google.com/?hl=ko)
- **Client-Side Data fetching:** [React Query](https://tanstack.com/query/latest/docs/react/overview)
- **News API:** [New York Times](https://developer.nytimes.com/)

## Features

- 섹션 별 뉴스 제공 with **New York Times API** / **Server-Side Rendering** with **React Server Component**
  - 실시간으로 업데이트되는 뉴스의 특성을 고려하여 데이터 **Revalidation**을 1시간 간격으로 설정
- 뉴스 기사 검색 with **New York Times API** / **무한 스크롤 UI** with **React Query** & **react-intersection-observer**
- 구글 로그인 (OAuth) with **NextAuth.js**
- 기사 저장/삭제 with **Firebase**
