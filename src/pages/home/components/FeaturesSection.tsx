
export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-ai-generate',
      title: 'AI 보조진단',
      description: '머신러닝 기반 이미지 분석으로 진단 정확도를 향상시킵니다.',
      benefit: '진단 시간 50% 단축'
    },
    {
      icon: 'ri-database-2-line',
      title: '클라우드 저장소',
      description: '안전한 클라우드 환경에서 진료 데이터를 체계적으로 관리합니다.',
      benefit: '99.9% 데이터 안정성'
    },
    {
      icon: 'ri-smartphone-line',
      title: '모바일 호환',
      description: '스마트폰, 태블릿 등 다양한 디바이스에서 접근 가능합니다.',
      benefit: 'iOS/Android 지원'
    },
    {
      icon: 'ri-shield-check-line',
      title: '의료진 인증',
      description: '의료진 자격 검증 시스템으로 안전한 진료 환경을 보장합니다.',
      benefit: '100% 인증 완료'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">핵심 특장점</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            검증된 기술력과 임상 경험을 바탕으로 차별화된 가치를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-blue-600 text-xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                <i className="ri-arrow-right-up-line mr-1"></i>
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                임상 검증된 성능
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">목표 진단 정확도</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                    <span className="text-blue-600 font-semibold">98%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700">시스템 안정성</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                    <span className="text-blue-600 font-semibold">99.9%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">사용자 만족도</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '96%' }}></div>
                    </div>
                    <span className="text-blue-600 font-semibold">96%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Medical%20performance%20analytics%20dashboard%20showing%20ENT%20telemedicine%20statistics%2C%20clinical%20validation%20data%20visualization%2C%20medical%20research%20charts%20and%20graphs%2C%20healthcare%20performance%20metrics%2C%20professional%20medical%20data%20analysis%20interface%2C%20clinical%20trial%20results%20display&width=500&height=400&seq=features1&orientation=landscape"
                alt="성능 분석"
                className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
              />
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">5년+</div>
                <div className="text-sm">임상 검증</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
