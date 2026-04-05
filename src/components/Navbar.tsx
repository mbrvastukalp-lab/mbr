"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav className="container mx-auto glass rounded-2xl shadow-strong overflow-hidden border border-white/20">
        <div className="px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="MBR Vastukalp Logo"
                  width={60}
                  height={60}
                  className="h-12 w-auto object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-md"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))' }}
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-bold text-navy tracking-tight leading-none group-hover:text-primary transition-colors">
                  MBR VASTUKALP
                </h3>
                <p className="text-[0.6rem] text-muted-foreground font-medium uppercase tracking-widest mt-1">
                  Legacy in Every Layer
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-5 py-2 rounded-xl font-semibold text-sm transition-all duration-300 group ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary hover:bg-white/40"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-primary rounded-full animate-scale-in" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button variant="hero" size="lg" className="rounded-xl px-8 shadow-accent hover:shadow-strong transition-all duration-300 active:scale-95">
                  Get Free Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-white/40 transition-colors border border-transparent hover:border-white/20"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden p-4 bg-white/80 backdrop-blur-xl border-t border-white/20 animate-slide-in-right">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl font-bold transition-all ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-foreground hover:bg-white/60 hover:translate-x-1"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 px-1">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" className="w-full h-12 rounded-xl text-base shadow-accent" size="lg">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

