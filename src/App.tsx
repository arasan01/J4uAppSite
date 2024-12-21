import { AppPreview } from './components/AppPreview';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { PricingFeatures } from './components/PricingFeatures';
import { PricingSection } from './components/PricingSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4">
        <Navbar />
        <Hero />
        <AppPreview />
      </header>

      <Features />
      <PricingFeatures />
      <PricingSection />
      <Footer />
    </div>
  );
}
