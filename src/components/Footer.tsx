import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: 'mailto:singhrahul5367@gmail.com',
      label: 'Email',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/rahul-singh0408',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={20} />,
      href: '#',
      label: 'GitHub',
    },
  ];

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-display text-3xl font-bold gradient-text"
          >
            RS<span className="text-neon-purple">.</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-full glass neon-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground font-mono text-sm flex items-center gap-2">
              Built with <Heart size={14} className="text-destructive animate-pulse" /> by Rahul Singh
            </p>
            <p className="text-muted-foreground/60 font-mono text-xs mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Tech Stack Badge */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground/60 font-mono">
            <span>Powered by</span>
            <span className="px-2 py-1 rounded bg-muted">React</span>
            <span>+</span>
            <span className="px-2 py-1 rounded bg-muted">TypeScript</span>
            <span>+</span>
            <span className="px-2 py-1 rounded bg-muted">Tailwind</span>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-neon-cyan/5 to-transparent blur-3xl pointer-events-none" />
    </footer>
  );
};

export default Footer;
