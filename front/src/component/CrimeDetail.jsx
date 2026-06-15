import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/CrimeDetail.css';

// 데이터 객체를 함수 밖으로 분리
const CRIME_DETAILS = {
  sexual: {
    title: '성범죄 대응 가이드',
    icon: 'fa-person-rays',
    description: '성적 자기결정권을 침해하는 범죄에 대한 대응 방법입니다.',
    actions: ['현장 대피 및 보존', '해바라기 센터( 117 ) 연락', '의료 기록 확보'],
    color: '#ff6b6b'
  },
  violence: {
    title: '폭력/상해 대응 가이드',
    icon: 'fa-hand-fist',
    description: '신체적 위협이나 폭력이 발생했을 때의 조치 사항입니다.',
    actions: ['안전한 장소로 이동', '주변 목격자 확보', '병원 진단서 발급'],
    color: '#f08c00'
  },
  economic: {
    title: '경제범죄 대응 가이드',
    icon: 'fa-money-check-dollar',
    description: '사기, 보이스피싱 등 금전적 피해 발생 시 대응법입니다.',
    actions: ['즉시 계좌 지급 정지', '입금 내역 및 대화 캡처', '경찰청( 112 ) 신고'],
    color: '#339af0'
  },
  cyber: {
    title: '사이버범죄 대응 가이드',
    icon: 'fa-laptop',
    description: '인터넷상에서 발생하는 명예훼손, 해킹 피해 관련 정보입니다.',
    actions: ['URL 및 화면 캡처', '상대방 계정 정보 저장', '사이버수사대 신고'],
    color: '#51cf66'
  },
  other: {
    title: '기타/특수범죄 가이드',
    icon: 'fa-scale-balanced',
    description: '그 외 특수한 상황에 대한 법률적 가이드입니다.',
    actions: ['상세 상황 기록', '법률 구조 공단 상담', '전문가 조력 요청'],
    color: '#845ef7'
  }
};

function CrimeDetail() {
  const { typeId } = useParams();
  const navigate = useNavigate();
  const detail = CRIME_DETAILS[typeId];

  if (!detail) {
    return (
      <div className="error-page">
        <p>존재하지 않는 페이지입니다.</p>
        <button onClick={() => navigate('/crimemenu')}>목록으로 돌아가기</button>
      </div>
    );
  }

  return (
    <div className="detail-container" style={{'--theme-color': detail.color}}>
      <header className="detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>← 뒤로가기</button>
        <div className="detail-icon-circle">
          <i className={`fa-solid ${detail.icon}`}></i>
        </div>
        <h1>{detail.title}</h1>
      </header>

      <section className="detail-content">
        <div className="description-box">
          <p>{detail.description}</p>
        </div>

        <div className="action-list">
          <h3><i className="fa-solid fa-check"></i> 지금 당장 해야 할 일</h3>
          <ul>
            {detail.actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="detail-footer">
        <button className="nav-btn chat-btn" onClick={() => navigate('/aichat')}>AI 챗봇 상담</button>
        {/* 수정된 부분: typeId를 URL에 포함하여 이동 */}
        <button className="nav-btn check-btn" onClick={() => navigate(`/checklist/${typeId}`)}>
          증거 체크리스트
        </button>
      </footer>
    </div>
  );
}

export default CrimeDetail;