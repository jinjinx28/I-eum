import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CRIME_DETAILS } from '../data/crimeData';
import '../css/CrimeDetail.css';

function CrimeDetail() {
  const { typeId } = useParams();
  const navigate = useNavigate();
  const detail = CRIME_DETAILS[typeId];
  const [activeTab, setActiveTab] = useState(null);

  console.log("전달받은 typeId:", typeId); 
  console.log("매칭된 데이터:", detail);

  useEffect(() => {
    if (detail?.subTypes) {
      setActiveTab(Object.keys(detail.subTypes)[0]);
    }
  }, [detail]);

  if (!detail) return <div className="error-page">존재하지 않는 페이지입니다.</div>;
  if (!activeTab) return null;

  const currentData = detail.subTypes[activeTab];

  return (
    <div className="detail-container" style={{ '--theme-color': detail.color }}>
      <header className="detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>← 뒤로가기</button>
        <div className="detail-icon-circle"><i className={`fa-solid ${currentData.icon}`}></i></div>
        <h1>{currentData.title}</h1>
      </header>

      <section className="detail-content">
        {Object.keys(detail.subTypes).length > 1 && (
          <div className="tab-menu">
            {Object.keys(detail.subTypes).map(key => (
              <button key={key} className={activeTab === key ? 'active' : ''} onClick={() => setActiveTab(key)}>
                {detail.subTypes[key].title}
              </button>
            ))}
          </div>
        )}

        <div className="description-box"><p>{currentData.description}</p></div>
        <div className="section-box action-list">
          <h3><i className="fa-solid fa-check"></i> 지금 당장 해야 할 일</h3>
          <ul>{(currentData.actions || []).map((a, i) => <li key={i}>{a}</li>)}</ul>
        </div>
        <details className="accordion-box"><summary>범죄 예방 수칙 보기</summary>
          <ul>{(currentData.prevention || []).map((p, i) => <li key={i}>{p}</li>)}</ul>
        </details>
        <details className="accordion-box"><summary>도움 받을 수 있는 곳</summary>
          <div className="support-list">
            {(currentData.support || []).map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noreferrer" className="support-link">
                <strong>{s.name}</strong> <span>({s.desc})</span>
              </a>
            ))}
          </div>
        </details>
      </section>

      <footer className="detail-footer">
        <button className="nav-btn chat-btn" onClick={() => navigate('/aichat')}>AI 챗봇 상담</button>
        <button className="nav-btn check-btn" onClick={() => navigate(`/checklist/${typeId}`)}>증거 체크리스트</button>
      </footer>
    </div>
  );
}

export default CrimeDetail;