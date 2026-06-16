import React, { useState } from 'react'; // useState 추가!
import '../css/Support.css';

const SUPPORT_CENTERS = [
  { name: '해바라기센터', phone: '117', url: 'https://www.sunflowercenter.or.kr', desc: '성폭력·가정폭력 피해자 통합지원', category: 'emergency' },
  { name: '112 경찰청', phone: '112', url: 'https://www.police.go.kr', desc: '범죄 신고 및 긴급 출동', category: 'emergency' },
  { name: '대한법률구조공단', phone: '132', url: 'https://www.klac.or.kr', desc: '무료 법률 상담 및 소송 지원', category: 'legal' },
  { name: '범죄피해자지원센터', phone: '1577 - 1295', url: 'https://www.kcva.or.kr', desc: '피해자 상담, 경제적 / 의료적 지원', category: 'recovery' },
  { name: '여성긴급전화', phone: '1366', desc: '가정폭력·성폭력 24시간 상담', category: 'emergency' },
  { name: '스마일센터', phone: '02 - 333 - 1295', url: 'https://www.resmile.or.kr/main/main.php', desc: '범죄 피해 트라우마 통합지원기관', category: 'recovery'},
  { name: '법률홈닥터', phone: '02 - 2110 - 3824', url: 'https://lawhomedoctor.moj.go.kr/', desc: '취약계층 법률지원서비스', category: 'legal'}
];

function Support() {
  const [category, setCategory] = useState(null); 
  const filteredCenters = category
    ? SUPPORT_CENTERS.filter(center => center.category === category)
    : SUPPORT_CENTERS;

  return (
    <div className="support-container">
      <h1>어떤 도움이 필요하신가요?</h1>
      <div className="support-tabs">
        <button 
            className={category === 'emergency' ? 'active' : ''} 
            onClick={() => setCategory('emergency')}
        >
            <i className="fa-solid fa-triangle-exclamation"></i> 긴급 구조
        </button>
        
        <button 
            className={category === 'legal' ? 'active' : ''} 
            onClick={() => setCategory('legal')}
        ><i className="fa-solid fa-scale-balanced"></i> 법률 상담
        </button>
        
        <button 
            className={category === 'recovery' ? 'active' : ''} 
            onClick={() => setCategory('recovery')}
        ><i className="fa-solid fa-hospital"></i> 일상 회복
        </button>
        </div>

      <div className="center-grid">
        {filteredCenters.map((center, index) => (
          <div className={`center-card ${center.category}`} key={index}>
            <h3>{center.name}</h3>
            <p className="phone"><i className="fa-solid fa-phone"></i> {center.phone}</p>
            <p className="desc">{center.desc}</p>
            {center.url && (
              <a href={center.url} target="_blank" rel="noopener noreferrer" className="web-btn">
                홈페이지 방문
              </a>
            )}
          </div>
        ))}
      </div>

      <div className='more-info'>
        <p>더 많은 지원 제도는 법무부 피해자지원제도에서 확인하실 수 있습니다.</p>
        <a href="http://www.moj.go.kr/cvs/index.do"
            target='_blank'
            rel='nooper noreferrer'
            className='more-info-btn'>법무부 피해자지원제도 홈페이지
        </a>
      </div>
    </div>
  );
}

export default Support;