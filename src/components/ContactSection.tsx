import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title gradient-text text-center mx-auto block">
            Get In Touch
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className={`animate-slide-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              I'm always interested in hearing about new projects, opportunities, 
              and collaborations. Whether you have a question or just want to say hi, 
              feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:singhrahul5367@gmail.com"
                className="glass hover-card rounded-xl p-4 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">Email</p>
                  <p className="text-foreground font-body group-hover:text-primary transition-colors">
                    singhrahul5367@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/rahul-singh0408"
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover-card rounded-xl p-4 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Linkedin className="text-secondary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">LinkedIn</p>
                  <p className="text-foreground font-body group-hover:text-secondary transition-colors">
                    linkedin.com/in/rahul-singh0408
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`animate-slide-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full input-neon rounded-lg ${
                    errors.name ? 'border-destructive' : ''
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full input-neon rounded-lg ${
                    errors.email ? 'border-destructive' : ''
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full input-neon rounded-lg resize-none ${
                    errors.message ? 'border-destructive' : ''
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive flex items-center gap-1">
                    <AlertCircle size={14} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-solid rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-center text-neon-green font-mono text-sm">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
