import { Button } from "./ui/button";

const MenuPreview = () => {
  const menuItems = [
    {
      category: "Signature Brews",
      items: [
        { name: "Forest Fog Latte", description: "Oat milk, lavender, honey", price: "6.50" },
        { name: "Waterfall Cold Brew", description: "24-hour steep, vanilla bean", price: "5.50" },
        { name: "Moss Garden Matcha", description: "Ceremonial grade, coconut cream", price: "7.00" },
      ],
    },
    {
      category: "Foraged Bites",
      items: [
        { name: "Wild Berry Tartlet", description: "Seasonal berries, mascarpone", price: "8.00" },
        { name: "Herb Garden Toast", description: "Sourdough, ricotta, forest herbs", price: "9.50" },
        { name: "Honey Oak Granola", description: "Local honey, toasted nuts", price: "7.50" },
      ],
    },
  ];

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-forest-sage font-body text-sm tracking-[0.3em] uppercase mb-4 block">
            Our Menu
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            Nature's Offerings
          </h2>
          <p className="text-muted-foreground text-lg">
            Crafted with care, sourced with conscience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="font-heading text-2xl font-medium text-foreground mb-8 pb-4 border-b border-border">
                {section.category}
              </h3>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-heading text-lg text-foreground group-hover:text-forest-moss transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-forest-sage font-medium">${item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
