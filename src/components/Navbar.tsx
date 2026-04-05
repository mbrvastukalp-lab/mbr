import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Founders", path: "/founders" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <img
              src="/logo.png"
              alt="MBR Vastukalp Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain group-hover:scale-105 transition-all duration-300 drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))' }}
            />
            <div className="flex flex-col justify-center">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground leading-none underline whitespace-nowrap tracking-wide">
                  MBR VASTUKALP
                </h3>
                <p
                  className="text-[0.45rem] sm:text-[0.5rem] md:text-[0.55rem] lg:text-[0.6rem] text-muted-foreground leading-tight whitespace-nowrap"
                >
                  Legacy in Every Layer. Trust in Every Project
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-scale-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2">
                <Button variant="hero" className="w-full" size="lg">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
