import { useState } from 'react';
import { Send, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
                Get Started
              </p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Send your product image.
                <br />
                <span className="text-accent">Get video today.</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to boost your product sales with stunning AI videos? 
                Get in touch and let's create something amazing together.
              </p>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Quick response, instant quotes</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:hello@aiproductvideo.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 hover:bg-accent/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@aiproductvideo.com</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Send us a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>
                <Button type="submit" variant="accent" className="w-full">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
