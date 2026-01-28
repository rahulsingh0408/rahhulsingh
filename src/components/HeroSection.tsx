import { useState } from 'react';
import { Download, ChevronDown, Linkedin, Mail, Eye, X } from 'lucide-react';
import TypewriterText from './TypewriterText';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const HeroSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const roles = ['AI Developer', 'Data Scientist', 'Machine Learning Engineer', 'Building Intelligence for Tomorrow'];
  
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/RahulSingh_Resume.pdf';
    link.download = 'RahulSingh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 grid-bg particle-bg overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-float delay-200" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-neon-pink/10 rounded-full blur-[80px] animate-float delay-500" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Greeting */}
            <p className="font-mono text-sm md:text-base text-primary mb-4 animate-fade-in opacity-0" style={{
              animationDelay: '0.2s'
            }}>
              {'>'} Hello, World! I'm
            </p>

            {/* Name */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-in opacity-0" style={{
              animationDelay: '0.4s'
            }}>
              <span className="gradient-text">RAHUL</span>
              <br />
              <span className="text-foreground">SINGH</span>
            </h1>

            {/* Typewriter Role */}
            <div className="h-16 md:h-20 flex items-center justify-center mb-8 animate-fade-in opacity-0" style={{
              animationDelay: '0.6s'
            }}>
              <p className="font-mono text-lg text-muted-foreground md:text-3xl">
                <TypewriterText texts={roles} speed={80} deleteSpeed={40} pauseDuration={2500} />
              </p>
            </div>

            {/* Summary */}
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in opacity-0" style={{
              animationDelay: '0.8s'
            }}>
              Driven AI & Data Science graduate crafting intelligent, scalable solutions with expertise in machine learning, deep learning, and cloud computing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in opacity-0" style={{
              animationDelay: '1s'
            }}>
              <button onClick={() => setIsPreviewOpen(true)} className="btn-solid rounded-lg flex items-center gap-3">
                <Eye size={20} />
                View Resume
              </button>
              <a href="https://linkedin.com/in/rahul-singh0408" target="_blank" rel="noopener noreferrer" className="btn-neon rounded-lg flex items-center gap-3">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="mailto:singhrahul5367@gmail.com" className="btn-neon rounded-lg flex items-center gap-3">
                <Mail size={20} />
                Contact
              </a>
            </div>

            {/* Scroll Indicator */}
            <button onClick={scrollToAbout} className="animate-bounce text-muted-foreground hover:text-primary transition-colors animate-fade-in opacity-0" style={{
              animationDelay: '1.2s'
            }} aria-label="Scroll to about section">
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Resume Preview Modal */}
      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-xl border-primary/20">
          <DialogHeader className="p-4 border-b border-primary/20 flex flex-row items-center justify-between">
            <DialogTitle className="font-display text-xl gradient-text">Resume Preview</DialogTitle>
            <div className="flex items-center gap-3">
              <a
                href="/RahulSingh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon rounded-lg flex items-center gap-2 text-sm py-2 px-4"
              >
                <Eye size={16} />
                Open in New Tab
              </a>
              <button
                onClick={handleDownloadResume}
                className="btn-solid rounded-lg flex items-center gap-2 text-sm py-2 px-4"
              >
                <Download size={16} />
                Download PDF
              </button>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-auto h-[calc(90vh-80px)] p-6">
            <object
              data="/RahulSingh_Resume.pdf"
              type="application/pdf"
              className="w-full h-full min-h-[600px]"
            >
              {/* Fallback for browsers that don't support embedded PDFs */}
              <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Download className="text-primary" size={48} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    PDF Preview Not Available
                  </h3>
                  <p className="text-muted-foreground max-w-md">
                    Your browser doesn't support embedded PDF viewing. Use the buttons above to open in a new tab or download the resume.
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="/RahulSingh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon rounded-lg flex items-center gap-2"
                  >
                    <Eye size={18} />
                    Open PDF
                  </a>
                  <button
                    onClick={handleDownloadResume}
                    className="btn-solid rounded-lg flex items-center gap-2"
                  >
                    <Download size={18} />
                    Download
                  </button>
                </div>
              </div>
            </object>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HeroSection;