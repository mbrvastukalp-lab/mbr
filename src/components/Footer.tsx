import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent opacity-50" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-2 rounded-2xl backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all duration-500">
                <Image
                  src="/logo.png"
                  alt="MBR Vastukalp Logo"
                  width={64}
                  height={64}
                  className="h-14 w-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-xl font-black text-white tracking-tighter leading-none">
                  MBR VASTUKALP
                </h4>
                <p className="text-[0.6rem] text-primary-foreground/60 font-bold uppercase tracking-[0.2em] mt-1.5">
                  Legacy in Every Layer
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed font-medium">
              Over 3 decades of unrivaled excellence in structural innovation, bespoke renovation, and holistic building maintenance. 
              Engineering trust, one masterpiece at a time.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-5">
              {[
                { label: "Instagram", url: "https://www.instagram.com/mbr_vastukalp", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "Facebook", url: "https://www.facebook.com/#", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "LinkedIn", url: "https://www.linkedin.com/in/mbr-vastukalp-436b213a6", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-secondary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/5 hover:border-white/20"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5 text-primary-foreground group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Explore</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Founders", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-").replace("-us", "")}`}
                    className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Expertise</h4>
            <ul className="space-y-4">
              {["Civil Structure", "Electrical Systems", "Premium Plumbing", "Artistic Painting", "Modern HVAC"].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 hover:translate-x-2 inline-block font-medium"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-white">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">+91 98212 82719</p>
                  <p className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">+91 86198 63180</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">mbrvastukalp@gmail.com</p>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-primary-foreground/70 leading-relaxed font-medium">Headquarters: Mumbai,<br />Maharashtra, India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto">
            <p className="text-primary-foreground/40 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
              © {new Date().getFullYear()} MBR VASTUKALP
            </p>
            <Link href="/privacy" className="text-primary-foreground/40 text-xs font-bold uppercase tracking-widest hover:text-secondary whitespace-nowrap">Privacy Policy</Link>
            <Link href="/terms" className="text-primary-foreground/40 text-xs font-bold uppercase tracking-widest hover:text-secondary whitespace-nowrap">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <p className="text-primary-foreground/60 text-sm font-bold italic tracking-wide">
              31 Years of Unyielding Trust
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

