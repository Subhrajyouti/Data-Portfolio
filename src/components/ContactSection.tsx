
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get in Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out to me for collaborations, opportunities, or just to say hello!
          </p>
          
          <div className="space-y-6">
            <ContactCard 
              icon={<Mail className="h-5 w-5 text-primary" />}
              title="Email"
              value="subhrajyoutimahanta@gmail.com"
              href="mailto:subhrajyoutimahanta@gmail.com"
            />
            
            <ContactCard 
              icon={<Phone className="h-5 w-5 text-primary" />}
              title="Phone"
              value="+91 6002967278"
              href="tel:+916002967278"
            />
            
            <ContactCard 
              icon={<Linkedin className="h-5 w-5 text-primary" />}
              title="LinkedIn"
              value="Connect with me"
              href="https://www.linkedin.com/in/subhrajyotimahanta/"
            />
            
            <ContactCard 
              icon={<Github className="h-5 w-5 text-primary" />}
              title="GitHub"
              value="View my projects"
              href="https://github.com/Subhrajyouti"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-md"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-md resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full rounded-md gap-2" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon, title, value, href }: ContactCardProps) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <Card className="flex items-center p-4 transition-colors border-border/50 hover:border-primary/30 group-hover:bg-primary/5">
        <div className="p-3 rounded-full bg-primary/10 mr-4">
          {icon}
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
          <p className="font-medium group-hover:text-primary transition-colors">{value}</p>
        </div>
      </Card>
    </a>
  );
};

export default ContactSection;
