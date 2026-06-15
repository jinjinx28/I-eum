import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../css/Nav.css';

function NavGroup() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  const MENU_ITEMS = [
    { name : '범죄 유형', path : '/crimemenu' },
    { name : 'AI 챗봇', path : '/aichat' },
    { name : '보호 및 지원 제도', path : 'support'}
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <button className="header-toggle" onClick={() => setIsOpen(true)}>≡</button>
            <ul className="header-menu">
              {MENU_ITEMS.map((item) => (
                <li key={item.name}><a onClick={() => navigate(item.path)}>{item.name}</a></li>
              ))}
            </ul>
          </div>
          <h1 className="logo"><a onClick={() => navigate('/')}>I - eum</a></h1>
          <div className="header-right">
            <a onClick={() => navigate('/login')}>로그인</a>
            <a onClick={() => navigate('/signup')}>회원가입</a>
          </div>
        </div>
      </header>

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