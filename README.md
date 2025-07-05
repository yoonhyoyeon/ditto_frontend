# Ditto 🕵️‍♂️
실시간 시험 부정행위 감지·방지 서비스

![Ditto Banner](./public/ditto-banner.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🏆 수상 내역
- **2024 세종대학교 AI/SW 해커톤 대상 (1위)**  
  - CV 기반 실시간 시험 부정행위 감지·방지 서비스 **Ditto** (2024.12.26)

## 📖 프로젝트 개요
Ditto는 시험 환경에서 발생할 수 있는 다양한 부정행위를 인공지능 기반 Computer Vision 모델과 실시간 스트리밍 기술을 통해 탐지·방지하는 서비스입니다.  
별도의 하드웨어 설치 없이 웹캠만으로 동작하며, 수험자의 얼굴·시선·행동 패턴을 분석하여 실시간 경고 및 로그를 제공합니다.

## ✨ 주요 기능
- **다중모달 부정행위 감지**  
  얼굴 인식, 시선 추적, 객체 탐지를 조합하여 부정행위 패턴(시선 이탈, 교재/휴대폰 사용 등) 탐지
- **실시간 경고 & 대시보드**  
  부정행위 의심 시 즉시 팝업/알림음으로 경고, 감독관 대시보드에 로그 표시
- **시험 진행/관리 화면 분리**  
  • 수험자 화면: 시험 응시 + 경고 알림  
  • 감독관 화면: 실시간 스트림, 이벤트 로그, 수험자 목록, 필터링
- **녹화 & 재생**  
  시험 세션 전체를 영상과 메타데이터로 저장, 사후 검증 용이
- **확장 가능한 플러그인 구조**  
  모델 교체 및 추가(예: 키보드 패턴 분석) 시 최소 변경으로 통합 가능

## 🛠️ 기술 스택
| 영역 | 사용 기술 |
| ---- | -------- |
| **Frontend** | Next.js 15 (App Router), React 19, JavaScript (ES2023), CSS Modules |
| **Real-time** | MediaDevices getUserMedia, Canvas API, Socket.IO 4.x |
| **State/Auth** | cookies-next (JWT Cookie 관리) |
| **Deployment** | Vercel (Front-end Hosting & CI/CD) |

## ⚙️ 로컬 실행 가이드
### 요구 사항
- Node.js 20 이상
- pnpm (권장) 또는 npm / yarn

### 설치 및 실행
```bash
# 저장소 클론
git clone https://github.com/yourname/ditto.git
cd ditto

# 패키지 설치
pnpm install

# 개발 서버 실행
pnpm dev
# 브라우저에서 http://localhost:3000 접속
```

## 📂 프로젝트 구조
```text
.
├── src/
│   ├── app/              # Next.js App Router 엔트리포인트
│   │   ├── layout.jsx
│   │   └── ...           # 라우트 폴더
│   ├── component/        # 공통 UI 컴포넌트
│   ├── container/        # 페이지/섹션 컨테이너
│   ├── service/          # API & 비즈니스 로직
│   ├── constants/        # 상수 정의
│   └── styles/           # 전역·모듈 스타일
├── public/               # 정적 파일
└── ...                   # 설정 파일 등
```
