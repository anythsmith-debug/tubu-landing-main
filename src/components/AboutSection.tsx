import { Leaf, Mountain, Droplets } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Ancient Forest",
      description: "Surrounded trees that whisper stories of nature's timeless beauty.",
    },
    {
      icon: Mountain,
      title: "Treehouse Huts",
      description: "Cozy wooden retreats perched among the canopy, offering intimate dining experiences.",
    },
    {
      icon: Droplets,
      title: "Cascading Waters",
      description: "The gentle symphony of nearby waterfalls creates a naturally peaceful ambiance.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-forest-sage font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Story
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            A Sanctuary in the Woods
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Born from a dream to blend artisan coffee with the serenity of untouched nature, 
            TuBu Café offers more than refreshments—it offers a retreat for the soul.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-2xl transition-all duration-500 hover:bg-card hover:shadow-soft"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-forest-mist/50 text-forest-moss mb-6 group-hover:bg-forest-sage/20 transition-colors duration-300">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
