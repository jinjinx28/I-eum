export const CRIME_DETAILS = {
  sexual: {
    color: '#ff6b6b',
    subTypes: {
      physical: { title: '성범죄', 
                  icon: 'fa-person-rays', 
                  description: '신체적 접촉을 동반한 성범죄 대응 방법입니다.', 
                  actions: ['현장 대피 및 보존', '해바라기 센터 (117) 연락', '의료 기록 확보'], 
                  prevention: ['귀가 시간 동선 공유', '위치 기반 범죄 알림 앱 활용', '음영지역 회피'], 
                  support: [{ name: '해바라기센터', link: 'https://www.sunflowercenter.or.kr', desc: '상담 및 의료 지원' }] 
                },

      digital: { title: '디지털 성범죄', 
                  icon: 'fa-laptop-code', 
                  description: '불법 촬영 및 유포 피해에 대한 대응 방법입니다.', 
                  actions: ['URL 및 화면 캡처', '디지털성범죄피해자지원센터 연락', '2차 가해 방지'], 
                  prevention: ['비밀번호 주기적 변경', '출처 불분명한 파일 실행 금지', '개인정보 노출 최소화'], 
                  support: [{ name: '디지털성범죄피해자지원센터', link: 'https://d4u.stop.or.kr', desc: '영상 삭제 지원' }] 
                }
    }
  },

  violence: {
    color: '#f08c00',
    subTypes: {
      assault: { title: '폭력', 
                icon: 'fa-hand-fist', 
                description: '신체적 위협이나 폭력 범죄에 대한 대응 방법', 
                actions: ['안전한 장소로 이동', '주변 목격자 확보', '병원 진단서 발급'], 
                prevention: ['도발 시 즉시 회피', '공공장소에서 도움 요청', '호신용 경보기 휴대'], 
                support: [{ name: '경찰청 (112)', link: 'https://112.police.go.kr', desc: '긴급 신고 및 구조' }, 
                          { name: '대한법률구조공단', link: 'https://www.klac.or.kr', desc: '법률 상담 및 지원' }] 
                  },
      injury: { title: '상해',
                icon: 'fa-hand-fist',
                description: '타인으로부터 신체적 상해를 입었을 경우의 대응 방법입니다.',
                actions: ['즉시 112 신고 및 경찰 기록', '상해 부위 사진 촬영 및 병원 진단서 발급', '주변 CCTV 확보 협조 요청'],
                prevention: ['위험 지역 출입 자제', '평소 호신술 및 자기 방어 지식 습득', '갈등 상황 시 즉시 현장 이탈'],
                support: [
                  { name: '경찰청 (112)', link: 'https://112.police.go.kr', desc: '긴급 구조 및 범죄 신고' },
                  { name: '범죄피해자 지원센터', link: 'https://www.kcva.or.kr', desc: '상해 피해자 법률/의료 지원' }]
                }
    }
  },

  economic: {
    color: '#339af0',
    subTypes: {
      fin_crime: { title: '경제범죄', 
                  icon: 'fa-money-check-dollar', 
                  description: '사기, 보이스피싱 등 금전적 피해 발생 시 대응 방법', 
                  actions: ['즉시 계좌 지급 정지', '입금 내역 및 대화 캡처', '112 신고'], 
                  prevention: ['출처 불분명한 링크 클릭 금지', '개인정보 요구 시 반드시 확인', '공공기관 사칭 주의'], 
                  support: [{ name: '금융감독원 (1332)', link: 'https://www.fss.or.kr', desc: '불법사금융 및 사기 상담' }, 
                            { name: '경찰청 사이버수사국', link: 'https://ecrm.police.go.kr', desc: '사이버 사기 신고' }] },
      phishing: { title: '피싱',
                  icon: 'fa-money-check-dollar',
                  description: '전화, 메신저 등을 이용한 사기 및 금융 정보 탈취 대응 방법입니다.',
                  actions: ['해당 금융기관에 계좌 지급 정지 신청', '스마트폰 내 악성 앱 삭제 및 초기화', '신분증 분실 신고 및 재발급'],
                  prevention: ['모르는 번호의 URL 클릭 금지', '본인 확인 요구 시 공식 번호로 직접 통화', '개인 금융 정보의 온라인 노출 방지'],
                  support: [
                    { name: '금융감독원 (1332)', link: 'https://www.fss.or.kr', desc: '보이스피싱 피해 상담' },
                    { name: '경찰청 사이버수사국', link: 'https://ecrm.police.go.kr', desc: '사이버 피싱 신고' }]
                }
    }
  },

  cyber: {
    color: '#51cf66',
    subTypes: {
      cybercrime: { title: '사이버', 
                    icon: 'fa-laptop', 
                    description: '인터넷상에서 발생하는 명예훼손, 해킹 피해 대응 정보', 
                    actions: ['URL 및 화면 캡처', '상대방 계정 정보 저장', '사이버수사대 신고'], 
                    prevention: ['2단계 인증 (2FA) 활성화', '개인정보 SNS 공개 금지', '비밀번호 주기적 변경'], 
                    support: [{ name: '사이버범죄 신고시스템 (ECRM)', link: 'https://ecrm.police.go.kr', desc: '사이버범죄 신고' }, 
                              { name: 'KISA 인터넷보호나라', link: 'https://boho.or.kr', desc: '해킹 / 스팸 상담' }] 
                            },
      hacking: { title: '해킹',
                icon: 'fa-laptop',
                description: '개인 계정 침해 및 정보 유출에 대한 대응 방법입니다.',
                actions: ['즉시 비밀번호 변경 및 로그아웃', '해킹된 계정의 보안 설정(2단계) 강화', '피해 사실 통보 및 관련 사이트 계정 확인'],
                prevention: ['사이트별 비밀번호 다르게 설정', '공용 PC 사용 후 흔적 삭제', '보안 인증 앱 사용'],
                support: [
                  { name: 'KISA 인터넷보호나라', link: 'https://boho.or.kr', desc: '해킹 피해 상담 및 조치' },
                  { name: '사이버범죄 신고시스템 (ECRM)', link: 'https://ecrm.police.go.kr', desc: '사이버범죄 신고' }]
                    }
    }
  },
  stalking: {
    color: '#845ef7',
    subTypes: {
      stalk: { title: '스토킹', 
              icon: 'fa-user-secret', 
              description: '스토킹 범죄 대응 및 보호 조치 안내입니다.', 
              actions: ['즉시 112 신고', '증거 수집(메시지, 녹취)', '경찰의 잠정조치 요청'], 
              prevention: ['상대방 요구 즉시 거절', '지인에게 상황 공유', '안심 귀가 서비스 활용'],
              support: [{ name: '스토킹 피해자 지원', link: 'https://www.police.go.kr', desc: '스토킹 대응 및 보호' }] 
            },
      cyberstalk: { title: '디지털스토킹',
                    icon: 'fa-user-secret',
                    description: 'SNS나 메신저를 통한 온라인상의 스토킹 및 괴롭힘 대응 방법입니다.',
                    actions: ['상대방 즉시 차단 및 증거 캡처', '공개된 프로필 비공개 전환', '사이버범죄 신고 및 접근 금지 요청'],
                    prevention: ['모르는 사람의 메시지/팔로우 요청 거절', '위치 정보 공유 설정 해제', '개인정보 게시 최소화'],
                    support: [
                      { name: '경찰청 (112)', link: 'https://www.police.go.kr', desc: '사이버 스토킹 신고' },
                      { name: '디지털성범죄피해자지원센터', link: 'https://d4u.stop.or.kr', desc: '디지털 피해 지원' }]
                  }
    },
  }, 
  
  atrocious: {
    color: '#c92a2a',
    subTypes: {
      main: { title: '강력범죄 피해 지원', 
              icon: 'fa-shield-heart', 
              description: '생명과 직결된 위급 상황 시 대응 가이드입니다.', 
              actions: ['즉시 대피 후 112 신고', '범죄피해자 지원센터 연락', '국선변호사 제도 문의'], 
              prevention: ['주변 연락망 확보', '심리상담센터 연계', '피해자 권리 확인'], 
              support: [{ name: '범죄피해자 지원센터', link: 'https://www.kcva.or.kr', desc: '종합 피해 지원' }, 
                        { name: '스마일센터', link: 'https://www.smilercenter.or.kr', desc: '심리치유 지원' }] }
    }
  }
};