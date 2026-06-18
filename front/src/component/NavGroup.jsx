import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Nav.css';

function NavGroup() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const MENU_ITEMS = [
    { name : '범죄 유형', path : '/crimemenu' },
    { name : 'AI 챗봇', path : '/aichat' },
    { name : '보호 및 지원 제도', path : '/support'}
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className='header-left'>
            <button className="header-toggle" onClick={() => setIsOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <button className="search-icon-btn" onClick={() => setIsSearchOpen(true)}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          <h1 className="logo"><a onClick={() => navigate('/')}>I - eum</a></h1>
          <div className="header-right">
            <a onClick={() => navigate('/login')}>로그인</a>
            <a onClick={() => navigate('/signup')}>회원가입</a>
          </div>
        </div>
      </header>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-box">
            <input type="text" placeholder="범죄 정보를 검색하세요..." autoFocus />
            <button onClick={() => setIsSearchOpen(false)}>닫기</button>
          </div>
        </div>
      )}

      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <button className='closeBtn' onClick={() => setIsOpen(false)}>x</button>
        <ul>
          {MENU_ITEMS.map((item) => (
            <li key={item.name}>
              <a onClick={() => { navigate(item.path); setIsOpen(false); }}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && <div className='overlay' onClick={() => setIsOpen(false)}></div>}
    </>
  );
}

export default NavGroup;