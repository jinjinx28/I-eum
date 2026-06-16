import React, { useState } from 'react';
import '../css/Support.css';

const SUPPORT_CATEGORIES = [
  {
    id: 'emergency',
    title: '긴급 구조 및 신변 보호',
    icon: <i className="fa-solid fa-star-of-life"></i>,
    items: [
      { name: '경찰청', phone: '112', desc: '범죄 신고 및 긴급 출동', url: 'https://www.police.go.kr' },
      { name: '해바라기센터', phone: '117', desc: '성폭력·가정폭력 피해자 통합지원', url: 'https://www.sunflowercenter.or.kr' },
      { name: '범죄피해자 원스톱솔루션센터', phone: '1577 - 1701', desc: '긴급 구호, 신변 보호, 원스톱 통합 지원', url: 'https://www.moj.go.kr/moj/3500/subview.do' }
    ]
  },
  {
    id: 'legal_welfare',
    title: '법률 상담 및 경제 지원',
    icon: <i className="fa-solid fa-scale-balanced"></i>,
    items: [
      { name: '대한법률구조공단', phone: '132', desc: '무료 법률 상담 및 소송 지원', url: 'https://www.klac.or.kr' },
      { name: '법률홈닥터', phone: '02 - 2110 - 3824', desc: '취약계층 법률지원서비스', url: 'https://lawhomedoctor.moj.go.kr/' },
      { name: '한국가정법률상담소', phone: '1644 - 7077', desc: '법률상담 및 소송구조', url: 'https://www.lawhome.or.kr/ko' },
      { name: '범죄피해자 지원센터', phone: '1577 - 1295', desc: '경제·취업 지원 및 수사·법정 동행 서비스', url: 'https://www.kcva.or.kr/' }
    ]
  },
  {
    id: 'recovery',
    title: '심리 치료 및 일상 회복',
    icon: <i className="fa-solid fa-briefcase-medical"></i>,
    items: [
      { name: '스마일센터', phone: '02 - 333 - 1295', desc: '범죄 피해 트라우마 통합지원기관', url: 'https://www.resmile.or.kr' }
    ]
  }
];

function Support() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="support-container">
      <h1>지원 제도</h1>

      <div className="accordion-wrapper">
        {SUPPORT_CATEGORIES.map((cat) => (
          <div key={cat.id} className="accordion-item">
            <button className="accordion-header" onClick={() => setOpenId(openId === cat.id ? null : cat.id)}>
              <div className="header-text">
                {cat.icon} <strong>{cat.title}</strong>
              </div>
              <span>{openId === cat.id ? '▲' : '▼'}</span>
            </button>
                        
            {openId === cat.id && (
              <div className="accordion-content">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="center-card">
                    <h3>{item.name}</h3>
                    <p className="center-desc">{item.desc}</p>
                    <p className="phone">
                      <i className="fa-solid fa-phone"></i> 
                      <span>{item.phone}</span>
                    </p>
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="web-btn" 
                    >
                      홈페이지 방문 ↗
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="more-section">
        <p className="more-desc">법무부 공식 홈페이지에서 더 많은 지원 제도와 최신 정보를 확인하세요.</p>
        <a 
          href="http://www.moj.go.kr/cvs/index.do" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="more-action-btn"
        >
          법무부 범죄자피해자 보호 · 지원 제도 
        </a>
      </div>
    </div>
  );
}
export default Support;