import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/CrimeDetail.css';

const CRIME_DETAILS = {
  sexual: {
    title: '성범죄 대응 가이드',
    icon: 'fa-person-rays',
    description: '성적 자기결정권을 침해하는 범죄에 대한 대응 방법입니다.',
    actions: ['현장 대피 및 보존', '해바라기 센터(117) 연락', '의료 기록 확보'],
    prevention: ['귀가 시간 동선 공유', '위치 기반 범죄 알림 앱 활용', '음영지역 회피'],
    support: [
      { name: '해바라기센터', link: 'https://www.sunflowercenter.or.kr', desc: '상담 및 의료 지원' },
      { name: '디지털성범죄피해자지원센터', link: 'https://d4u.stop.or.kr', desc: '영상 삭제 지원' }
    ],
    color: '#ff6b6b'
  },
  violence: {
    title: '폭력 / 상해 대응 가이드',
    icon: 'fa-hand-fist',
    description: '신체적 위협이나 폭력이 발생했을 때의 조치 사항입니다.',
    actions: ['안전한 장소로 이동', '주변 목격자 확보', '병원 진단서 발급'],
    prevention: ['도발 시 즉시 회피', '공공장소에서 도움 요청', '호신용 경보기 휴대'],
    support: [
      { name: '경찰청(112)', link: 'https://112.police.go.kr', desc: '긴급 신고 및 구조' },
      { name: '대한법률구조공단', link: 'https://www.klac.or.kr', desc: '법률 상담 및 지원' }
    ],
    color: '#f08c00'
  },
  economic: {
    title: '경제범죄 대응 가이드',
    icon: 'fa-money-check-dollar',
    description: '사기, 보이스피싱 등 금전적 피해 발생 시 대응법입니다.',
    actions: ['즉시 계좌 지급 정지', '입금 내역 및 대화 캡처', '경찰청(112) 신고'],
    prevention: ['출처 불분명한 링크 클릭 금지', '개인정보 요구 시 반드시 확인', '공공기관 사칭 주의'],
    support: [
      { name: '금융감독원(1332)', link: 'https://www.fss.or.kr', desc: '불법사금융 및 사기 상담' },
      { name: '경찰청 사이버수사국', link: 'https://ecrm.police.go.kr', desc: '사이버 사기 신고' }
    ],
    color: '#339af0'
  },
  cyber: {
    title: '사이버범죄 대응 가이드',
    icon: 'fa-laptop',
    description: '인터넷상에서 발생하는 명예훼손, 해킹 피해 관련 정보입니다.',
    actions: ['URL 및 화면 캡처', '상대방 계정 정보 저장', '사이버수사대 신고'],
    prevention: ['2단계 인증(2FA) 활성화', '개인정보 SNS 공개 금지', '비밀번호 주기적 변경'],
    support: [
      { name: '사이버범죄 신고시스템(ECRM)', link: 'https://ecrm.police.go.kr', desc: '사이버범죄 신고' },
      { name: 'KISA 인터넷보호나라', link: 'https://boho.or.kr', desc: '해킹/스팸 상담' }
    ],
    color: '#51cf66'
  },
  other: {
    title: '기타 / 특수범죄 가이드',
    icon: 'fa-scale-balanced',
    description: '스토킹, 강력범죄 등 특수한 상황에 대한 법률적 가이드입니다.',
    actions: ['112 긴급 신고', '상세 상황 기록', '전문가 조력 요청'],
    prevention: ['스토킹 징후 즉시 신고', '개인정보 노출 최소화', '안전 귀가 서비스 이용'],
    support: [
      { name: '스토킹 피해자 지원센터', link: 'https://www.police.go.kr', desc: '스토킹 범죄 대응' },
      { name: '범죄피해자 지원센터', link: 'https://www.kcva.or.kr', desc: '종합 피해 지원' }
    ],
    color: '#845ef7'
  }
};

function CrimeDetail() {
  const { typeId } = useParams();
  const navigate = useNavigate();
  const detail = CRIME_DETAILS[typeId];

  if (!detail) return <div className="error-page">존재하지 않는 페이지입니다.</div>;

  return (
    <div className="detail-container" style={{ '--theme-color': detail.color }}>
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

        <div className="section-box action-list">
          <h3><i className="fa-solid fa-check"></i> 지금 당장 해야 할 일</h3>
          <ul>
            {detail.actions.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </div>

        <details className="accordion-box">
          <summary>범죄 예방 수칙 보기</summary>
          <ul>
            {detail.prevention.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </details>

        <details className="accordion-box">
          <summary>도움 받을 수 있는 곳</summary>
          <div className="support-list">
            {detail.support.map((s, i) => (
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