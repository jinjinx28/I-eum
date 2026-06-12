import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavGroup() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="header-toggle" onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul className="header-menu">
            <li><a onClick={() => navigate('/crimemenu')}>범죄 유형</a></li>
            <li><a onClick={() => navigate('/checklist')}>증거 리스트</a></li>
            <li><a onClick={() => navigate('/aichat')}>AI 챗봇</a></li>
          </ul>
        </div>

        <h1 className="logo"><a onClick={() => navigate('/')}>I-eum</a></h1>

        <nav className="header-right">
          <ul className="header-menu">
            <li><a onClick={() => navigate('/login')}>로그인</a></li>
            <li><a onClick={() => navigate('/signup')}>회원가입</a></li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div className="header-menu-dropdown">
          <ul>
            <li><a onClick={() => {navigate('/crimemenu'); setIsOpen(false)}}>범죄 유형</a></li>
            <li><a onClick={() => {navigate('/checklist'); setIsOpen(false)}}>증거 리스트</a></li>
            <li><a onClick={() => {navigate('/aichat'); setIsOpen(false)}}>AI 챗봇</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavGroup;