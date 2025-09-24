
export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">파트너십</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 분야의 전문기관과 협력하여 원격의료의 미래를 만들어갑니다
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">파트너가 되어주세요</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            ENT Lab과 함께 이비인후과 원격진료의 새로운 표준을 만들어나갈 파트너를 찾습니다
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <i className="ri-handshake-line text-3xl text-blue-200 mb-3"></i>
              <h4 className="text-lg font-semibold mb-2">기술 협력</h4>
              <p className="text-blue-100 text-sm">공동 연구개발 및 기술 혁신</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <i className="ri-global-line text-3xl text-blue-200 mb-3"></i>
              <h4 className="text-lg font-semibold mb-2">시장 확장</h4>
              <p className="text-blue-100 text-sm">국내외 시장 진출 파트너십</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <i className="ri-lightbulb-line text-3xl text-blue-200 mb-3"></i>
              <h4 className="text-lg font-semibold mb-2">혁신 창출</h4>
              <p className="text-blue-100 text-sm">새로운 서비스 모델 개발</p>
            </div>
          </div>
          
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer"
          >
            파트너십 문의하기
          </button>
        </div>
      </div>
    </section>
  );
}