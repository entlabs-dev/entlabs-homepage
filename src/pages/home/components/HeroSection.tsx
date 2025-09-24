
export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-[65vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20medical%20technology%20laboratory%20with%20advanced%20ENT%20equipment%2C%20otoscopes%2C%20audiometry%20devices%2C%20clean%20white%20medical%20environment%2C%20professional%20healthcare%20setting%2C%20medical%20research%20facility%2C%20sterile%20medical%20workspace%2C%20high-tech%20diagnostic%20tools%2C%20medical%20innovation%20center&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-left text-white max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            이비인후과 원격진료를
            <br />
            <span className="text-blue-400">새로운 차원으로</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            디지털 이경·청각 측정 하드웨어와 의료용 소프트웨어(환자 앱·의사용 포털) 결합을 통해, 안전하고 정확한 진료 경험을 제공합니다.
          </p>
          
          {/* Key Highlights */}
          <div className="mb-8 space-y-3">
            <div className="flex items-start text-gray-300">
              <i className="ri-check-line text-blue-400 text-lg mr-3 mt-0.5 flex-shrink-0"></i>
              <span className="text-sm md:text-base"><strong>All-in-One Tele-ENT Kit:</strong> 디지털 이경·청력 측정 모듈·환자 앱·의사용 포털</span>
            </div>
            <div className="flex items-start text-gray-300">
              <i className="ri-check-line text-blue-400 text-lg mr-3 mt-0.5 flex-shrink-0"></i>
              <span className="text-sm md:text-base"><strong>임상 워크플로 연동:</strong> 예약–측정–기록–원격 상담까지 단일 흐름</span>
            </div>
            <div className="flex items-start text-gray-300">
              <i className="ri-check-line text-blue-400 text-lg mr-3 mt-0.5 flex-shrink-0"></i>
              <span className="text-sm md:text-base"><strong>데이터 보안 중심 설계:</strong> 환자 프라이버시와 접근제어 우선</span>
            </div>
            <div className="flex items-start text-gray-300">
              <i className="ri-check-line text-blue-400 text-lg mr-3 mt-0.5 flex-shrink-0"></i>
              <span className="text-sm md:text-base"><strong>연구·파일럿에 최적화:</strong> 지표/로그 기반 성능·안전성 검증 지원</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-7

70 transition-colors whitespace-nowrap cursor-pointer"
            >
              문의하기
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
            >
              파트너십 문의
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </div>
    </section>
  );
}
