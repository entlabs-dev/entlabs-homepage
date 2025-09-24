
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">ENT Lab 소개</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            ENT Lab은 이비인후과 원격진료의 표준화를 목표로 하드웨어와 소프트웨어를 수직 통합해 개발합니다. 연구·임상 파트너와 함께 신뢰성·재현성·보안을 갖춘 진료 경험을 만들고자 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20medical%20team%20working%20with%20advanced%20ENT%20telemedicine%20equipment%2C%20doctors%20using%20remote%20diagnostic%20tools%2C%20modern%20medical%20consultation%20setup%2C%20healthcare%20professionals%20collaborating%20with%20technology%2C%20clinical%20grade%20medical%20devices%2C%20professional%20medical%20environment&width=600&height=400&seq=about1&orientation=landscape"
              alt="ENT Lab 팀"
              className="rounded-lg shadow-lg w-full h-80 object-cover object-top"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              이비인후과 원격진료 솔루션 기업
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-microscope-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">연구 기반 기술력</h4>
                  <p className="text-gray-600">
                    의료진 피드백을 바탕으로 개발된 검증된 솔루션을 제공합니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-hospital-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">하드웨어 & 소프트웨어 융합</h4>
                  <p className="text-gray-600">
                    모바일 어플리케이션과 연동되는 전용 디바이스를 제공합니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-team-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">전문의 협력</h4>
                  <p className="text-gray-600">
                    이비인후과 전문의와의 긴밀한 협력을 통해 실제 진료 환경에 최적화된 솔루션을 개발합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 회사 정보 섹션 추가 */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">회사 정보</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-building-line text-blue-600 text-xl mr-3 mt-1"></i>
                <div>
                  <div className="font-semibold text-gray-900">법인명</div>
                  <div className="text-gray-600">㈜이엔티랩 (ENT Lab Co., Ltd.)</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="ri-map-pin-line text-blue-600 text-xl mr-3 mt-1"></i>
                <div>
                  <div className="font-semibold text-gray-900">주소</div>
                  <div className="text-gray-600">
                    1606, GIFC Tower, 240, Kintex-ro,<br />
                    Ilsanseo-gu, Goyang-si,<br />
                    Gyeonggi-do 10391, KOREA
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-mail-line text-blue-600 text-xl mr-3 mt-1"></i>
                <div>
                  <div className="font-semibold text-gray-900">이메일</div>
                  <div className="text-gray-600">entlabco@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="ri-phone-line text-blue-600 text-xl mr-3 mt-1"></i>
                <div>
                  <div className="font-semibold text-gray-900">전화</div>
                  <div className="text-gray-600">033-734-2777</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">협력 의료기관</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">진단 정확도</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">5년+</div>
            <div className="text-gray-600">연구개발 경험</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">기술 지원</div>
          </div>
        </div>
      </div>
    </section>
  );
}