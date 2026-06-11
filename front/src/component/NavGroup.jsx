import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavGroup() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        
        <nav className="nav-left">
          <ul className="header-menu">
            <li><a href="#" className="header-menu-item">범죄 유형</a></li>
            <li><a href="#" className="header-menu-item">증거리스트</a></li>
            <li><a href="#" className="header-menu-item">AI 챗봇</a></li>
          </ul>
        </nav>
        
        <h1 className="logo">
          <a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            I-eum
          </a>
        </h1>
        
        <nav className="nav-right">
          <ul className="header-menu">
            <li>
              <a href="#" className="header-menu-item" 
              onClick={(e) => { e.preventDefault(); navigate('/login'); }}>
                로그인
              </a>
            </li>
            <li>
              <a href="#" className="header-menu-item" 
              onClick={(e) => { e.preventDefault(); navigate('/signup'); }}>
                회원가입
              </a>
            </li>
          </ul>
        </nav>
        
        <button className="header-toggle">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default NavGroup;