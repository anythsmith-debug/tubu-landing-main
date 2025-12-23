import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "./ui/button";

const VisitSection = () => {
  return (
    <section id="visit" className="py-24 md:py-32 bg-forest-deep text-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-forest-sage font-body text-sm tracking-[0.3em] uppercase mb-4 block">
              Find Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              Begin Your Journey
            </h2>
            <p className="text-cream/70 text-lg max-w-xl mx-auto">
              Hidden away yet welcoming to all who seek refuge in nature's embrace.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream/10 text-forest-sage mb-4">
                <MapPin size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl mb-2">Location</h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                Shop No.10C, Sector 10, <br />
                Chandigarh-160011
              </p>
            </div>

            <div className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream/10 text-forest-sage mb-4">
                <Clock size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl mb-2">Hours</h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                Sunrise to Sunset<br />
                Open Daily
              </p>
            </div>

            <div className="p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream/10 text-forest-sage mb-4">
                <Phone size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl mb-2">Contact</h3>
              <p className="text-cream/70 text-sm leading-relaxed">
                hello@tubucafe.com<br />
                (555) 123-4567
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="xl">
              Make a Reservation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
