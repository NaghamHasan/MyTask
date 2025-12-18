import FeaturesSection from "@/components/Features/FeaturesSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/header";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import Work from "@/components/Work/Work";
import "../Css/sections.css"

export default function Home() {
  return (
    <div className="min-h-screen main-page font-sans">
      <Header />
      <div className="sections relative top-12">
        <HeroSection />
        <FeaturesSection />
        <Work />
        <Testimonial/>
      </div>
      <Footer/>
    </div>
  );
}
