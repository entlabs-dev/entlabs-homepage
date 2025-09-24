
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SolutionsSection from './components/SolutionsSection';
import FeaturesSection from './components/FeaturesSection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <FeaturesSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
