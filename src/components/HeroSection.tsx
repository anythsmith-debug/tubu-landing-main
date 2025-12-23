import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-forest.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Forest cafe with wooden hut and waterfall among ancient trees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-overlay" />
      </div>

      {/* Floating Mist Effect */}
      <div className="absolute inset-0 bg-mist opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="animate-fade-up text-cream/80 font-body text-sm tracking-[0.3em] uppercase mb-6">
            Escape to Nature
          </p>
          <h1 className="animate-fade-up-delayed font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-tight mb-8">
            Where the Forest
            <br />
            <span className="italic text-forest-sage">Meets Your Cup</span>
          </h1>
          <p className="animate-fade-up-delayed-2 text-cream/90 font-body text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Nestled among ancient trees, with waterfalls as your backdrop and cozy huts as your haven.
          </p>
          <div className="animate-fade-up-delayed-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Explore Our World
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="text-cream/90 hover:text-cream hover:bg-cream/10 border border-cream/20"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
