
export default function SolutionsSection() {
  const solutions = [
    {
      icon: 'ri-stethoscope-line',
      title: '원격진료 하드웨어',
      description: '고해상도 이비인후과 전용 카메라, 디지털 이경, 청력검사 장비 등 임상급 진단 도구',
      features: ['고해상도 내시경', '디지털 이경 시스템', '원격 청력검사', 'AI 보조진단']
    },
    {
      icon: 'ri-computer-line',
      title: '진료 소프트웨어',
      description: '직관적인 인터페이스와 강력한 분석 기능을 제공하는 통합 원격진료 플랫폼',
      features: ['실시간 영상진료', '진료기록 관리', '처방전 발행', '환자 모니터링']
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">통합 솔루션</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            하드웨어부터 소프트웨어까지, 완벽한 원격진료 생태계를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className={`${solution.icon} text-blue-600 text-2xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <i className="ri-check-line text-blue-600 mr-3"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                통합 솔루션의 장점
              </h3>
              <p className="text-blue-100 mb-6">
                모든 구성요소가 완벽하게 연동되어 최적의 성능과 안정성을 보장합니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <i className="ri-shield-check-line text-blue-200 mr-3 text-xl"></i>
                  <span>의료기기 인증 완료</span>
                </div>
                <div className="flex items-center text-white">
                  <i className="ri-lock-line text-blue-200 mr-3 text-xl"></i>
                  <span>HIPAA 준수 보안</span>
                </div>
                <div className="flex items-center text-white">
                  <i className="ri-cloud-line text-blue-200 mr-3 text-xl"></i>
                  <span>클라우드 기반 확장성</span>
                </div>
              </div>
            </div>
            <div className="h-64 lg:h-80">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20medical%20technology%20integration%20system%20showing%20connected%20ENT%20devices%2C%20medical%20monitors%20displaying%20patient%20data%2C%20integrated%20healthcare%20technology%20platform%2C%20modern%20medical%20equipment%20connectivity%2C%20digital%20health%20ecosystem%2C%20medical%20device%20integration%20dashboard&width=600&height=400&seq=solutions1&orientation=landscape"
                alt="통합 솔루션"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
