import hutInterior from "@/assets/hut-interior.jpg";
import tubuExp from "@/assets/tubu-open.jpg";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated animate-float">
                  <img
                    src={hutInterior}
                    alt="Cozy treehouse cafe interior with warm lighting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-12">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-soft animate-float-delayed">
                  <img
                    src={tubuExp}
                    alt="Artisan coffee and pastries on rustic table"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-forest-sage/10 blur-3xl" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-forest-sage font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              The Experience
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
              Sip, Breathe, 
              <br />
              <span className="italic text-forest-moss">Be Present</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Each visit to TuBu Café is a journey. Follow winding paths through 
                moss-covered trails to discover your private hut, suspended gently among 
                the branches.
              </p>
              <p>
                Our baristas craft each beverage with beans sourced from sustainable 
                farms, while our chefs prepare seasonal dishes using ingredients foraged 
                from the surrounding forest.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <div className="font-heading text-3xl md:text-4xl font-medium text-foreground">12</div>
                <div className="text-sm text-muted-foreground mt-1">Private Huts</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-medium text-foreground">3</div>
                <div className="text-sm text-muted-foreground mt-1">Waterfalls</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-medium text-foreground">∞</div>
                <div className="text-sm text-muted-foreground mt-1">Peace</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
