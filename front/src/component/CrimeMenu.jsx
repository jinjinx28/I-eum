import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CrimeMenu.css';

function CrimeMenu() {
  const navigate = useNavigate();

  const CRIME_TYPES = [
    { id: 'sexual', name: '성범죄', icon: <i class="fa-solid fa-person-rays"></i> },
    { id: 'violence', name: '폭력 / 상해', icon: <i class="fa-solid fa-hand-fist"></i> },
    { id: 'economic', name: '경제범죄', icon: <i class="fa-solid fa-money-check-dollar"></i> },
    { id: 'cyber', name: '사이버범죄', icon: <i class="fa-solid fa-laptop"></i> },
    { id: 'other', name: '기타 / 특수', icon: <i class="fa-solid fa-scale-balanced"></i> },
  ];

  return (
    <div className="crime-menu-container">
      <h2>범죄 유형 선택</h2>
      <ul className="crime-list">
        {CRIME_TYPES.map((type) => (
          <li key={type.id} className="crime-item" onClick={() => navigate(`/crimemenu/${type.id}`)}>
            <span className="crime-icon">{type.icon}</span>
            <span className="crime-name">{type.name}</span>
            <span className="arrow">›</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrimeMenu;