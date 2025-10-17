import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProductGrid } from "./components/ProductGrid";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <ProductGrid />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}