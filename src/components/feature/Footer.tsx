
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="https://static.readdy.ai/image/43a253cfb4d1a2b87ca64c49c52381fb/cb4c0596a05af3380c9623e25e34ac27.png" 
              alt="ENT Lab" 
              className="h-8 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              이비인후과 원격진료를 위한 하드웨어·솔루션으로 진료의 공간을 넓히다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-youtube-fill text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
                <i className="ri-mail-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">솔루션</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">원격진료 하드웨어</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">진료 소프트웨어</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">지원</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">데모 요청</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">기술 문서</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">교육 자료</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">고객 지원</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ENT Lab Co., Ltd. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-white text-sm cursor-pointer">
              Website Builder
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">개인정보처리방침</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
