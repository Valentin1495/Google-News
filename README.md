# Google News

**Next.js**와 [New York Times API](https://developer.nytimes.com)를 사용하여 개발한 뉴스 앱으로, NYT의 최신 뉴스를 제공합니다.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies](#technologies)

## Features

- NYT의 최신 뉴스 기사 읽기 및 검색
- 즐겨찾기 기능 (관심 있는 기사 저장)
- 모든 디바이스에서 원활한 사용을 위한 반응형 디자인

## Screenshots

- _News feed page_

  - **New York Times API**를 이용하여 섹션 별 뉴스 제공. **Next.js** 기본 옵션인 **React Server Component**를 활용하여 **Server Rendering**.

![image](https://github.com/Valentin1495/Google-News/assets/69514169/e7db1023-efa5-4a8b-bf51-acc8f0fcf281)

- _Search results page_

  - 뉴스 기사 검색. 무한 스크롤 UI로 만들기 위해 **React Query**와 **Client Component**를 활용해 **Client Rendering**.

![image](https://github.com/Valentin1495/Google-News/assets/69514169/62222ce6-15b7-4464-ac92-2e5806cf988b)

- _OAuth page_

  - **NextAuth.js**를 활용한 Google 로그인

![image](https://github.com/Valentin1495/Google-News/assets/69514169/6d451627-b4a4-483f-85b0-6dbcf2eb2f97)

- _Saved stories page_

  - **Firebase Firestore**에 원하는 기사 저장

![image](https://github.com/Valentin1495/Google-News/assets/69514169/d2e16f06-dbea-46f7-ac1f-a9e0a6c4ae1b)

- 실시간으로 업데이트되는 뉴스의 특성을 고려하여 데이터 **Revalidation**을 1시간 간격으로 설정

## Technologies

- TypeScript
- React
- Next.js
- Tailwind CSS
- React Query
- Firebase
- react-firebase-hooks
- next-auth
- react-intersection-observer
- react-hot-toast
- date-fns
