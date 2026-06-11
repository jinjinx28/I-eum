import React from 'react';

const MENU_LEFT = ['범죄 유형', '증거리스트', 'AI 챗봇'];
const MENU_RIGHT = ['홈', '로그인', '회원가입'];

function Home() {
  return (
    <main className="main-content">
      <section className="home">
        <h2 className="home-title">안전한 일상 회복을 위한 대응 가이드</h2>
        <p className="home-description">범죄 피해 대응에 필요한 필수 자료를 정리하고 지원 기관을 연결해 드립니다.</p>
        <a href="#" className="home-contact">Contact Us</a>
      </section>

      <Card title="증거 체크리스트" icon="fa-square-check">
        <div className="checklist">
          {['문자/메신저 캡처본', '통화 녹취록', '사진/영상 증거'].map((text) => (
            <label key={text}><input type="checkbox" /> {text}</label>
          ))}
        </div>
      </Card>

      <Card title="진술 작성" icon="fa-pen-to-square">
        <textarea placeholder="현재 상황을 간략하게 적어주세요."></textarea>
        <div className="btn-container">
          <button className="submit-btn save-btn">저장하기</button>
        </div>
      </Card>

      <Card title="AI 챗봇 상담" icon="fa-robot">
        <p className="section-desc">전문 AI가 24시간 실시간으로 초기 대응 방법을 안내해 드립니다.</p>
        <div className="btn-container">
          <button className="submit-btn chat-btn">상담하기</button>
        </div>
      </Card>
    </main>
  );
}

function Card({ title, icon, children }) {
  return (
    <section className="step">
      <h2><i className={`fa-solid ${icon}`}></i> {title}</h2>
      {children}
    </section>
  );
}

export default Home;