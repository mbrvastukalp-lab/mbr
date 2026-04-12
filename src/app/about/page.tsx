import { Target, Eye, Award, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

const milestones = [
  { year: "1996", title: "Company Founded", desc: "Started with a vision to transform construction industry" },
  { year: "2005", title: "1000+ Projects", desc: "Milestone of completing over 1000 successful projects" },
  { year: "2012", title: "Expanded Services", desc: "Added HVAC and specialized renovation services" },
  { year: "2020", title: "30K+ Happy Clients", desc: "Serving thousands of satisfied customers across India" },
  { year: "2024", title: "Industry Leader", desc: "Recognized as a leading construction and maintenance firm" },
];

const values = [
  { icon: CheckCircle, title: "Integrity", desc: "We maintain the highest ethical standards in all our dealings" },
  { icon: Award, title: "Excellence", desc: "Committed to delivering superior quality in every project" },
  { icon: Users, title: "Client Focus", desc: "Your satisfaction is our ultimate goal" },
  { icon: Target, title: "Innovation", desc: "Embracing modern techniques and technologies" },
];

export const metadata = {
  title: 'About',
  description: 'Learn about MBR Vastukalp, a trusted name in Mumbai civil construction, structural repairs, and renovation since 1996. Dedicated to quality and client focus.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MBR Vastukalp</h1>
            <p className="text-xl text-primary-foreground/80">
              Your Vision, Our Expertise. Over 30 years of transforming visions into reality since 1996.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  MBR Vastukalp was founded in 1996 with a simple yet powerful vision: to provide
                  exceptional construction and renovation services that stand the test of time. What
                  started as a small family business has grown into one of the most trusted names in
                  the construction industry.
                </p>
                <p>
                  Over the past 30 years, we have completed thousands of projects ranging from
                  residential renovations to large-scale commercial constructions. Our journey has
                  been marked by an unwavering commitment to quality, integrity, and customer satisfaction.
                </p>
                <p>
                  Today, MBR Vastukalp continues to lead with innovation while staying true to the
                  values that built our reputation. Our team of skilled professionals brings expertise,
                  dedication, and passion to every project we undertake.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
                alt="MBR Vastukalp construction team working on a project"
                width={800}
                height={600}
                className="rounded-2xl shadow-strong w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and respected construction company, known for transforming
                spaces and lives through exceptional craftsmanship and sustainable practices. We
                envision a future where every structure we build contributes to a better tomorrow.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver unparalleled construction and renovation services that exceed client
                expectations. We are committed to using quality materials, employing skilled
                professionals, and maintaining transparent communication throughout every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl shadow-soft hover:shadow-strong transition-all hover:-translate-y-2">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Key milestones in our 30+ year history
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 transform md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-12 md:pl-0`}>
                    <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-xl">
                      <span className="text-secondary font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-primary-foreground/80 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full transform md:-translate-x-1/2 border-4 border-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
