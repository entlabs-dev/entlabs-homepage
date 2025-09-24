
import { useState } from 'react';

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState('demo');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent,
    formType: string
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const submitUrl =
        formType === 'demo'
          ? 'https://readdy.ai/api/form/d39md98g1baue90as7l0'
          : 'https://readdy.ai/api/form/d39md98g1baue90as7lg';

      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (value.trim()) {
          formDataToSend.append(key, value);
        }
      });
      formDataToSend.append('inquiryType', formType);

      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          position: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            문의하기
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ENT Lab의 솔루션에 대해 더 자세히 알아보시거나 데모를 체험해보세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('demo')}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'demo'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <i className="ri-play-circle-line mr-2"></i>
                데모 요청
              </button>
              <button
                onClick={() => setActiveTab('partnership')}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'partnership'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <i className="ri-handshake-line mr-2"></i>
                파트너십 문의
              </button>
            </div>

            <div className="p-8">
              {/* Demo Form */}
              {activeTab === 'demo' && (
                <form
                  onSubmit={(e) => handleSubmit(e, 'demo')}
                  data-readdy-form
                  id="demo-form"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      데모 요청
                    </h3>
                    <p className="text-gray-600">
                      실제 원격진료 시스템을 직접 체험해보세요
                    </p>
                  </div>

                  {/* --- INPUT FIELDS --- */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        성명 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="홍길동"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="example@hospital.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        연락처
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="010-1234-5678"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        소속기관 *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="○○병원 이비인후과"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      직책
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="전문의, 과장, IT담당자 등"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      문의내용
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                      placeholder="데모 희망 일정이나 특별히 확인하고 싶은 기능이 있으시면 알려주세요 (최대 500자)"
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.message.length}/500자
                    </div>
                  </div>

                  {/* Success / Error messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center text-green-800">
                        <i className="ri-check-circle-line mr-2"></i>
                        데모 요청이 성공적으로 전송되었습니다. 빠른 시일 내에
                        연락드리겠습니다.
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center text-red-800">
                        <i className="ri-error-warning-line mr-2"></i>
                        전송 중 오류가 발생했습니다. 다시 시도해주세요.
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                        전송 중...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2"></i>
                        데모 요청하기
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Partnership Form */}
              {activeTab === 'partnership' && (
                <form
                  onSubmit={(e) => handleSubmit(e, 'partnership')}
                  data-readdy-form
                  id="partnership-form"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      파트너십 문의
                    </h3>
                    <p className="text-gray-600">
                      ENT Lab과 함께 원격의료의 미래를 만들어가세요
                    </p>
                  </div>

                  {/* Re‑use the same fields as demo – they are generic enough */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        성명 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="홍길동"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="example@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        연락처
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="010-1234-5678"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        소속기관 *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="ABC Corp."
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="position"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      직책
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="전무, 마케팅 담당자 등"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      문의내용
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                      placeholder="파트너십 관련 문의 내용을 남겨주세요 (최대 500자)"
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {formData.message.length}/500자
                    </div>
                  </div>

                  {/* Success / Error messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center text-green-800">
                        <i className="ri-check-circle-line mr-2"></i>
                        파트너십 문의가 성공적으로 전송되었습니다.
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center text-red-800">
                        <i className="ri-error-warning-line mr-2"></i>
                        전송 중 오류가 발생했습니다. 다시 시도해주세요.
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin mr-2"></i>
                        전송 중...
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line mr-2"></i>
                        파트너십 문의하기
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                전화 문의
              </h3>
              <p className="text-gray-600">033-734-2777</p>
              <p className="text-sm text-gray-500">평일 09:00-18:00</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                이메일
              </h3>
              <p className="text-gray-600">entlabco@gmail.com</p>
              <p className="text-sm text-gray-500">24시간 접수</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                오시는 길
              </h3>
              <p className="text-gray-600 text-sm">
                1606, GIFC Tower, 240, Kintex-ro,
              </p>
              <p className="text-gray-600 text-sm">
                Ilsanseo-gu, Goyang-si,
              </p>
              <p className="text-gray-600 text-sm">
                Gyeonggi-do 10391, KOREA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
