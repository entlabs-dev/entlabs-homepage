
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/43a253cfb4d1a2b87ca64c49c52381fb/cb4c0596a05af3380c9623e25e34ac27.png" 
              alt="ENT Lab" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer transition-colors"
            >
              회사소개
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer transition-colors"
            >
              솔루션
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer transition-colors"
            >
              특장점
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap cursor-pointer transition-colors"
            >
              파트너십
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium whitespace-nowrap cursor-pointer transition-colors"
            >
              문의하기
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium cursor-pointer w-full text-left"
              >
                회사소개
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium cursor-pointer w-full text-left"
              >
                솔루션
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium cursor-pointer w-full text-left"
              >
                특장점
              </button>
              <button 
                onClick={() => scrollToSection('partners')}
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium cursor-pointer w-full text-left"
              >
                파트너십
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium cursor-pointer w-full text-left"
              >
                문의하기
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
