const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-heading text-xl font-semibold text-foreground">
              TuBu
            </span>
            <span className="text-forest-sage font-heading italic">Café</span>
          </div>

          <nav className="flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Our Story
            </a>
            <a href="#menu" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Menu
            </a>
            <a href="#visit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Visit
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2024 TuBu Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
