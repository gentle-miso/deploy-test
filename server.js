const express = require('express');
const path = require('path');

const app = express();
// 무료 호스팅 환경(Render, Railway 등)에서 지정하는 포트를 우선 사용
const PORT = process.env.PORT || 3000;

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일(CSS, JS 등) 제공 설정 (public 폴더 사용)
app.use(express.static(path.join(__dirname, 'public')));

// URL 인코딩 데이터 및 JSON 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 테스트 라우트
app.get('/test', (req, res) => {
  const sampleData = {
    title: '테스트 웹페이지_수정본_v2',
    serverTime: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }),
    status: '정상 작동 중',
    features: ['EJS 템플릿 연동', '반응형 디자인 UI', '무료 호스팅 테스트']
  };

  res.render('test', sampleData);
});

// 루트 접속 시 /test로 리다이렉트
app.get('/', (req, res) => {
  res.redirect('/test');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});