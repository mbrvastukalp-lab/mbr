"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award, Users, Wrench, Zap, Droplet, PaintBucket, Wind, Hammer, Building, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { icon: Building, name: "Civil Structure Repairing", desc: "Expert structural repairs and reinforcement" },
  { icon: Trash2, name: "Demolition", desc: "Safe and efficient demolition services" },
  { icon: Zap, name: "Electrical", desc: "Complete electrical solutions" },
  { icon: Droplet, name: "Plumbing", desc: "Professional plumbing services" },
  { icon: Hammer, name: "Civil", desc: "All civil construction works" },
  { icon: Wrench, name: "Carpentry", desc: "Custom carpentry and woodwork" },
  { icon: PaintBucket, name: "Painting", desc: "Interior and exterior painting" },
  { icon: Wind, name: "HVAC", desc: "Heating, ventilation & AC systems" },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "5000+", label: "Projects Completed" },
  { value: "3000+", label: "Happy Clients" },
  { value: "95%+", label: "Retention Rate" },
  { value: "100%", label: "Client Satisfaction" },
];

const features = [
  { icon: Shield, title: "Quality Assured", desc: "Premium materials and expert craftsmanship on every project" },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your timeline and deliver projects on schedule" },
  { icon: Award, title: "Licensed & Insured", desc: "Fully certified professionals you can trust" },
  { icon: Users, title: "Expert Team", desc: "Skilled workforce with decades of combined experience" },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner, Mumbai",
    initials: "RS",
    rating: 5,
    quote: "MBR Vastukalp transformed our office space beautifully. Their attention to detail and commitment to quality is unmatched. Highly recommended!"
  },
  {
    name: "Priya Mehta",
    role: "Homeowner, Thane",
    initials: "PM",
    rating: 5,
    quote: "Exceptional service from start to finish. The team was professional, on-time, and delivered beyond our expectations. Our home renovation was seamless!"
  },
  {
    name: "Amit Kumar",
    role: "Property Developer, Navi Mumbai",
    initials: "AK",
    rating: 5,
    quote: "Working with MBR Vastukalp was a pleasure. They understood our vision perfectly and executed it flawlessly. True professionals with a passion for excellence."
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image - Using a div with bg-image for this specific style, or we could use next/image with fill */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop)',
          }}
        >
          {/* Lighter overlay for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/50"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-secondary-foreground px-5 py-2 rounded-full mb-8 animate-fade-in-up shadow-lg">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-sm font-bold tracking-wide uppercase italic">30+ Years of Industrial Excellence</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-primary-foreground mb-8 animate-fade-in-up delay-100 leading-[1.1] tracking-tighter">
              Building Dreams,<br />
              <span className="text-secondary drop-shadow-sm">Creating Legacies</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 animate-fade-in-up delay-200 leading-relaxed max-w-2xl font-medium">
              MBR Vastukalp is your premier partner for structural engineering, renovation, and maintenance. 
              Transforming architectural visions into enduring realities with unparalleled integrity.
            </p>


            <div className="flex flex-wrap gap-6 animate-fade-in-up delay-300">
              <Link href="/contact">
                <Button variant="hero" size="xl" className="group rounded-2xl px-10 h-16 text-lg shadow-accent hover:shadow-strong transition-all duration-500">
                  Free Consultation
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="navyOutline" size="xl" className="rounded-2xl px-10 h-16 text-lg border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-500">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-20 relative -mt-24 z-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-[2rem] shadow-strong p-10 md:p-16 border border-white/40 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-3xl -z-10 rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 rounded-full" />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-navy mb-3 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                  <div className="text-muted-foreground font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction and maintenance solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group bg-card p-8 rounded-3xl shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-4 border border-border/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150" />
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  <service.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
                <div className="mt-6 flex items-center text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" className="group">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-secondary">MBR Vastukalp?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                For over 30 years, we have been the cornerstone of trust and quality in the construction industry.
                Our commitment to excellence, combined with our experienced team, ensures every project
                exceeds expectations.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Get a free consultation and quote for your construction or renovation needs.
                </p>
                <Link href="/contact">
                  <Button variant="hero" size="lg" className="w-full">
                    Contact Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied clients
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="bg-card rounded-xl shadow-strong p-8 md:p-12 min-h-[320px] flex flex-col justify-between">
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-secondary fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground italic mb-8 leading-relaxed text-center text-lg md:text-xl">
                &quot;{testimonials[currentTestimonial].quote}&quot;
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonials[currentTestimonial].initials}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-card rounded-full shadow-strong flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-card rounded-full shadow-strong flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentTestimonial
                    ? "w-8 bg-secondary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and take the first step towards your dream project.
          </p>
          <Link href="/contact">
            <Button variant="default" size="xl">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
