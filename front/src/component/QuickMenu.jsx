import '../css/QuickMenu.css';

const QuickMenu = () => {
    const menuList = [
        { 
        name: '범죄 유형 가이드', 
        path: '/crimemenu', 
        icon: <i class="fa-solid fa-folder-open"></i>, 
        desc: '피해 상황별 맞춤 가이드를 제공합니다.' 
        },
        { 
        name: '증거 기록 도구', 
        path: '/checklist', 
        icon: <i class="fa-solid fa-magnifying-glass"></i>, 
        desc: '중요한 증거를 놓치지 않게 기록하세요.' 
        },
        { 
        name: '보호 및 지원 제도', 
        path: '/support', 
        icon: <i class="fa-solid fa-shield-halved"></i>, 
        desc: '당신을 위한 사회적 지원을 확인하세요.' 
        },
    ];
    
    return(
        <nav className="quick-menu">
            {menuList.map((item, index) => (
                <a key={index} href={item.path} className="quick-menu-item">
                <div className="item-icon">{item.icon}</div>
                <div className="item-text">
                    <h3 className="item-title">{item.name}</h3>
                    <p className="item-desc">{item.desc}</p>
                </div>
                </a>
            ))}
        </nav>
    );
};

export default QuickMenu;