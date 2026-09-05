import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedWork from '@/components/FeaturedWork';
import HowItWorks from '@/components/HowItWorks';
import DesignerShowcase from '@/components/DesignerShowcase';
import ClientValue from '@/components/ClientValue';
import DesignerValue from '@/components/DesignerValue';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedWork />
        <HowItWorks />
        <DesignerShowcase />
        <ClientValue />
        <DesignerValue />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
