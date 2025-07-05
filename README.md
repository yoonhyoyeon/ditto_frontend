# Ditto 🕵️‍♂️
실시간 시험 부정행위 감지·방지 서비스

<img src="./public/images/logo.svg" width="400"></img>

## 🏆 수상 내역
- **2024 세종대학교 AI/SW 해커톤 대상 (1위)**  
  - CV 기반 실시간 시험 부정행위 감지·방지 서비스 **Ditto** (2024.12.26)

## 📖 프로젝트 개요
Ditto는 시험 환경에서 발생할 수 있는 다양한 부정행위를 인공지능 기반 Computer Vision 모델과 실시간 스트리밍 기술을 통해 탐지·방지하는 서비스입니다.  
별도의 하드웨어 설치 없이 웹캠만으로 동작하며, 수험자의 얼굴·시선·행동 패턴을 분석하여 실시간 경고 및 로그를 제공합니다.

## ✨ 주요 기능
- **실시간 웹캠 스트리밍**  
  수험자의 웹캠 영상을 `<canvas>`로 캡처하여 0.2초 간격으로 서버에 전송
- **부정행위 경고 UI**  
  서버 AI 결과를 받아 실시간 썸네일·테두리 색상으로 이상 행위 표시
- **감독관 대시보드**  
  수험자 썸네일 그리드, 위험도 하이라이트, 시험 종료 제어
- **과목/시험 관리**  
  과목 생성·조회, 시험 일정 등록, 결과 통계 조회
- **회원 인증**  
  로그인·회원가입, `cookies-next`를 통한 세션 유지

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
