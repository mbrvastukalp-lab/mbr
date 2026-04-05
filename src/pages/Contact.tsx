import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, User, MessageSquare, Briefcase } from "lucide-react";
import { z } from "zod";
import { useForm, ValidationError } from "@formspree/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  service: z.string().min(1, "Please select a service interest"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const Contact = () => {
  const { toast } = useToast();
  const [state, handleSubmitFormspree] = useForm("mbdppbdj");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    // Validate form with Zod first
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof FormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // If valid, submit to Formspree
    const response = await handleSubmitFormspree(formData);
    
    if (response.body && 'errors' in response.body) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      subject: "",
      message: "",
    });

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactInfo = [
    { icon: Phone, title: "Phone", content: ["+91 98212 82719", "+91 86198 63180"] },
    { icon: Mail, title: "Email", content: ["mbrvastukalp@gmail.com"] },
    { icon: MapPin, title: "Address", content: ["Mumbai, Maharashtra", "India"] },
    { icon: Clock, title: "Working Hours", content: ["Mon - Sat: 9AM - 7PM", "Sunday: Closed"] },
  ];

  if (isSubmitted || state.succeeded) {
    return (
      <Layout>
        <section className="py-20 min-h-[80vh] flex items-center bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
                <CheckCircle className="w-12 h-12 text-secondary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
                Thank You!
              </h1>
              <p className="text-muted-foreground mb-8 animate-fade-in-up delay-100">
                Your message has been received. Our team will contact you within 24 hours
                to discuss your project requirements.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline" size="lg" className="animate-fade-in-up delay-200">
                Send Another Message
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Contact Us</h1>
            <p className="text-xl text-primary-foreground/80 animate-fade-in-up delay-100">
              Your vision, our expertise. Let's start building something great together.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6 animate-fade-in-up delay-200">
                <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Have a project in mind or need expert maintenance? Reach out to our specialized team today.
                </p>
              </div>

              <div className="grid gap-6 animate-fade-in-up delay-300">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-card rounded-2xl shadow-soft border border-border group hover:border-secondary/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                      {info.content.map((line, lIndex) => (
                        <p key={lIndex} className="text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Premium Form */}
            <div className="lg:col-span-7">
              <div className="bg-card p-8 md:p-10 rounded-3xl shadow-strong border border-border animate-fade-in-up delay-150 relative">
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl -z-10" />
                
                <h2 className="text-2xl font-bold text-foreground mb-8 text-center lg:text-left">Send Inquiries</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/70 ml-1">Full Name *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={`pl-10 h-12 rounded-xl focus:ring-secondary ${errors.name ? "border-destructive ring-1 ring-destructive" : "border-border"}`}
                        />
                      </div>
                      {errors.name && <p className="text-xs text-destructive ml-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/70 ml-1">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`pl-10 h-12 rounded-xl focus:ring-secondary ${errors.email ? "border-destructive ring-1 ring-destructive" : "border-border"}`}
                        />
                      </div>
                      {errors.email && <p className="text-xs text-destructive ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground/70 ml-1">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`pl-10 h-12 rounded-xl focus:ring-secondary ${errors.phone ? "border-destructive ring-1 ring-destructive" : "border-border"}`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-destructive ml-1">{errors.phone}</p>}
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-foreground/70 ml-1">Service Interest *</Label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                        <Select 
                          onValueChange={(val) => {
                            setFormData(prev => ({ ...prev, service: val }));
                            if (errors.service) setErrors(prev => ({ ...prev, service: undefined }));
                          }}
                          value={formData.service}
                        >
                          <SelectTrigger className={`pl-10 h-12 rounded-xl focus:ring-secondary relative ${errors.service ? "border-destructive ring-1 ring-destructive" : "border-border"}`}>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl overflow-hidden shadow-strong">
                            {["Civil Structure Repair", "Electrical Solutions", "Plumbing Services", "Demolition", "Painting", "HVAC", "Carpentry", "General Civil Work"].map((svc) => (
                              <SelectItem key={svc} value={svc} className="focus:bg-secondary focus:text-secondary-foreground">
                                {svc}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {errors.service && <p className="text-xs text-destructive ml-1">{errors.service}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground/70 ml-1">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief summary of your project..."
                      className={`h-12 rounded-xl focus:ring-secondary ${errors.subject ? "border-destructive ring-1 ring-destructive" : "border-border"}`}
                    />
                    {errors.subject && <p className="text-xs text-destructive ml-1">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/70 ml-1">Your Detailed Message *</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-muted-foreground" />
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us everything about your requirements..."
                        rows={6}
                        className={`pl-10 rounded-2xl focus:ring-secondary ${errors.message ? "border-destructive ring-1 ring-destructive" : "border-border"}`}
                      />
                    </div>
                    {errors.message && <p className="text-xs text-destructive ml-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full rounded-2xl shadow-accent group" disabled={state.submitting}>
                    {state.submitting ? (
                      "Processing..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    Securely connecting you to MBR Vastukalp expert team.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Map Block - Full Width Horizontal */}
          <div className="mt-12 rounded-3xl overflow-hidden shadow-strong border border-border h-[450px] animate-fade-in-up delay-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301.70122566539334!2d72.90475346206789!3d19.024776402791264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f155ae4869%3A0x601e5b86abc19b58!2s2WF3%2BRXV%2C%20Vishnu%20Nagar%2C%20Chembur%2C%20Mumbai%2C%20Maharashtra%20400074!5e1!3m2!1sen!2sin!4v1769415520150!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MBR Trust Location - Vishnu Nagar, Chembur, Mumbai"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
