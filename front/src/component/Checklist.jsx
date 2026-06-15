import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CHECKLIST_DATA } from '../data/checklistData.js';
import '../css/Checklist.css';

const CRIME_TITLES = {
  sexual: '성범죄',
  violence: '폭력/상해',
  economic: '경제범죄',
  cyber: '사이버범죄',
  other: '기타/특수범죄'
};

function Checklist() {
  const { typeId } = useParams();
  const navigate = useNavigate();
  
  const items = CHECKLIST_DATA[typeId] || [];

  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem(`checklist_${typeId}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(`checklist_${typeId}`, JSON.stringify(checkedItems));
  }, [checkedItems, typeId]);

  const toggleItem = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (!typeId || items.length === 0) {
    return (
      <div className="error-msg">
        <h2>데이터가 없습니다.</h2>
        <button onClick={() => navigate('/crimemenu')}>메뉴로 돌아가기</button>
      </div>
    );
  }

  return (
    <div className="checklist-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← 뒤로가기</button>
      <h2>{CRIME_TITLES[typeId] || '범죄'} 증거 확보 체크리스트</h2>
      
      <ul className="checklist-list">
        {items.map(item => (
          <li key={item.id} className={checkedItems[item.id] ? 'checked' : ''} onClick={() => toggleItem(item.id)}>
            <input type="checkbox" checked={!!checkedItems[item.id]} readOnly />
            <span className="checklist-text">{item.text}</span>
          </li>
        ))}
      </ul>
      
      <div className="checklist-footer">
        <button className="reset-btn" onClick={() => setCheckedItems({})}>전체 초기화</button>
      </div>
    </div>
  );
}

export default Checklist;