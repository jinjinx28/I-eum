import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Nav.css';

function NavGroup() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const MENU_ITEMS = [
    { name : '범죄 유형', path : '/crimemenu' },
    { name : '증거 리스트', path : '/checklist' },
    { name : 'AI 챗봇', path : '/aichat' },
    { name : '보호 및 지원 제도', path : 'support'}
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <button className="header-toggle" onClick={() => setIsOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          <h1 className="logo"><a onClick={() => navigate('/')}>I - eum</a></h1>

          <nav className="header-right">
            <ul className="header-menu">
              <li><a onClick={() => navigate('/login')}>로그인</a></li>
              <li><a onClick={() => navigate('/signup')}>회원가입</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <button className='closeBtn' onClick={() => setIsOpen(false)}>x</button>
        <ul>
          {MENU_ITEMS.map((item) => (
            <li key = {item.name}>
              <a onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}>{item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && <div className='overlay' onClick={() => setIsOpen(false)}></div>}
    </>
  );
}

export default NavGroup;