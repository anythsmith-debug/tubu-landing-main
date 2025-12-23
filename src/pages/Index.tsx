import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import MenuPreview from "@/components/MenuPreview";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TurgerBurger | Forest Retreat & Burger</title>
        <meta 
          name="description" 
          content="Discover Woodland Café, a serene forest retreat with cozy treehouse huts, cascading waterfalls, and artisan coffee among ancient trees. Book your nature escape today." 
        />
        <meta name="keywords" content="forest cafe, treehouse restaurant, nature retreat, artisan coffee, waterfall cafe" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <MenuPreview />
          <VisitSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
