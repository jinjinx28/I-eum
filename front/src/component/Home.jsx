import React from 'react';
import '../css/Home.css';
import QuikMenu from './QuickMenu.jsx';

const MENU_LEFT = ['범죄 유형', '증거리스트', 'AI 챗봇'];
const MENU_RIGHT = ['홈', '로그인', '회원가입'];

function Home() {
  return (
    <div className='home-content'>
      <section className='hero-section'>
        <div className='hero-overlay'>
          <h1 className='hero-title'>범죄 피해 대응부터 증거 정리까지, 한 번에 해결하는</h1>
          <span className='ieum-highlight'>I - eum</span>
        </div>
      </section>

      <main className='main-content'>
        <section className='home-info'>
          <p className='home-text'>I-eum은 범죄 피해 초기 대응을 돕는 가이드 플랫폼입니다. <br/> 보다 상세한 법률 / 행정 지원은 범죄피해자지원중앙센터를 참고하시기 바랍니다.</p>
          <a
            href="http://kcvc.or.kr/main/"
            target='_blank'
            rel='nooper noreferrer'
            className='kcvc-btn'
          >
            범죄피해자중앙센터 바로가기
          </a>
        </section>
      </main>

      <QuikMenu />

    </div>
  );
}

export default Home;