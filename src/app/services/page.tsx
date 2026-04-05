import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building, Trash2, Zap, Droplet, Hammer, Wrench, PaintBucket, Wind, ArrowRight, CheckCircle, Layers, Sofa, Paintbrush, Sparkles, Home } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Building,
    name: "Civil Structure Repairing",
    image: "/service/civil_structure_repairing.jpg",
    description: "Expert structural repairs and reinforcement services for buildings of all types. We diagnose and fix structural issues with precision and quality materials.",
    features: [
      "Micro Concreting",
      "Concrete Casting",
      "Rebarring",
      "Re-Inforcement",
      "Water Proofing Treatment",
      "Sewage"
    ],
  },
  {
    icon: Trash2,
    name: "Demolition",
    image: "/service/demolition.jpeg",
    description: "Safe, efficient, and environmentally responsible demolition services. From selective interior demolition to complete structure removal with proper debris management.",
    features: [
      "Civil Structure Demolition (Slab, Beam, Column, Flooring)",
      "Interior Work Demolition",
      "Civil Demolition",
      "Plumbing Demolition",
      "POP/Gypsum Demolition",
      "Carpentry Demolition",
      "Electrical Demolition"
    ],
  },
  {
    icon: Hammer,
    name: "Civil Finishing Work",
    image: "/service/civil_finishing.jpg",
    description: "High-quality civil finishing services that transform your space with precision and attention to detail. Expert installation and craftsmanship.",
    features: [
      "Tile & Marble Installation Section",
      "Kitchen Counter & Work",
      "Masonry Work (Brick)",
      "Plaster Work",
      "Water Proofing Treatment"
    ],
  },
  {
    icon: Layers,
    name: "POP & Gypsum Work",
    image: "/service/pop_&_gypsum.png",
    description: "Professional POP and gypsum solutions for modern interiors. Creating stunning aesthetic spaces with custom designs and textures.",
    features: [
      "POP Wall Punning",
      "Design Moulding & Texture",
      "Gypsum Ceiling",
      "Grid Ceiling",
      "PVC Ceiling",
      "Gypsum Partition"
    ],
  },
  {
    icon: Sofa,
    name: "Carpentry & Loose Furniture Work",
    image: "/service/carpentry.jpg",
    description: "Fine carpentry services including custom furniture, modular solutions, and decorative woodwork tailored to your specifications.",
    features: [
      "Loose Furniture (Custom)",
      "Design Wall Panelling",
      "Design Partition Work",
      "Modular Cabinet (Storage)",
      "Modular Work Station",
      "Door Frame & Shutter",
      "Sliding Door & Window",
      "Modular/Modern Bed",
      "Reception Table",
      "Vanity Counter",
      "Modular Kitchen"
    ],
  },
  {
    icon: Zap,
    name: "Electrical Work (Residential & Commercial)",
    image: "/service/electrical.jpg",
    description: "Complete electrical solutions from new installations to repairs and upgrades. Our certified electricians ensure safety, efficiency, and compliance.",
    features: [
      "Power Wiring & Conductivity",
      "Data Wiring & Conductivity",
      "Networking Conductivity",
      "DB Installation & Fixing",
      "Earthing Installation"
    ],
  },
  {
    icon: Wind,
    name: "HVAC",
    image: "/service/hvac.jpg",
    description: "Heating, ventilation, and air conditioning services. Installation, repair, and maintenance for optimal indoor comfort and energy efficiency.",
    features: [
      "AC installation",
      "Heating systems",
      "Ventilation solutions",
      "Maintenance plans",
      "Energy efficiency upgrades"
    ],
  },
  {
    icon: Home,
    name: "Modern Wall Panelling",
    image: "/service/wall_panelling.jpg",
    description: "Contemporary wall paneling solutions for accent walls and interior design enhancement. Multiple material options with professional installation.",
    features: [
      "PVC wall Panelling",
      "Wooden Panelling",
      "Acoustic Panelling",
      "Decorative finishes",
      "Professional installation"
    ],
  },
  {
    icon: Droplet,
    name: "Plumbing (Residential & Commercial)",
    image: "/service/plumbing.jpg",
    description: "Professional plumbing services for residential and commercial properties. Expert installation, repair, and maintenance of all water supply systems.",
    features: [
      "Sanitary Water Supply Line",
      "Domestic Water Supply Line",
      "Commercial Water Supply Line",
      "Portable Water Supply System"
    ],
  },
  {
    icon: Wrench,
    name: "Fabrication Work",
    image: "/service/fabrication.jpg",
    description: "Custom metal and structural fabrication services for architectural elements, safety features, and space optimization solutions.",
    features: [
      "Mezzanine Floor Making",
      "Loft Work",
      "Staircase Work",
      "Grill Work",
      "Railing Work"
    ],
  },
  {
    icon: PaintBucket,
    name: "Painting (Exterior & Interior)",
    image: "/service/painting.jpg",
    description: "Transform your space with our professional painting services. Interior and exterior painting with premium quality finishes and expert application.",
    features: [
      "Primar Paintwork",
      "Oil Paint Work",
      "Luster Paint Work",
      "Royal Paint Work",
      "Plastic Paint Work",
      "Art Paint Work"
    ],
  },
  {
    icon: Paintbrush,
    name: "Polishing (Exterior & Interior)",
    image: "/service/polishing.jpg",
    description: "Expert polishing services for furniture and surfaces with premium finish quality. Enhance beauty and durability with professional techniques.",
    features: [
      "PU Polish Work",
      "Mela Mite Polish",
      "Texture Polish Work",
      "Matte Polish Work",
      "Clear Polish Work"
    ],
  },
  {
    icon: Sparkles,
    name: "Modern Finishing Work",
    image: "/service/modern_finishing.jpg",
    description: "Contemporary finishing solutions for floors and surfaces. Premium materials and expert installation for lasting beauty and functionality.",
    features: [
      "Frosted Film",
      "Vinyl Flooring",
      "Wooden Flooring",
      "PVC Flooring",
      "Epoxy Flooring"
    ],
  },
];

export const metadata = {
  title: 'Our Services - MBR Vastukalp | Construction, Renovation & Maintenance',
  description: 'Explore our wide range of services including civil structure repair, demolition, electrical, plumbing, painting, HVAC, and more in Mumbai.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/80">
              Comprehensive construction, renovation, and maintenance solutions for all your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center py-12 border-b border-border last:border-0"
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.name}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="outline" className="group">
                      Get Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={`${service.name} - MBR Vastukalp construction services`}
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to discuss your specific requirements and provide tailored solutions.
          </p>
          <Link href="/contact">
            <Button variant="default" size="xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
