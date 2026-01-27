import { Download, ChevronDown, Linkedin, Mail } from 'lucide-react';
import TypewriterText from './TypewriterText';
const HeroSection = () => {
  const roles = ['AI Developer', 'Data Scientist', 'Machine Learning Engineer', 'Building Intelligence for Tomorrow'];
  const handleDownloadResume = () => {
    // Create a simple text-based resume for download
    const resumeContent = `
RAHUL SINGH
AI & Data Science Developer
Email: singhrahul5367@gmail.com
LinkedIn: linkedin.com/in/rahul-singh0408

SUMMARY
Driven and enthusiastic AI & Data Science developer with hands-on experience in machine learning, deep learning, data analysis, cloud computing, and modern web technologies.

EDUCATION
B.Tech CSE (AI & Data Science) - Vignan's Institute of Information Technology (2022-2026), CGPA: 7.45
Diploma in Computer Engineering - Sanketika Polytechnic (2019-2022), CGPA: 6.95

EXPERIENCE
Software Development Intern - Symbiosis (May 2024 - June 2024)
- Built a robust web scraping application to automate structured data extraction
- Worked on data automation, scraping logic, and clean data pipelines

SKILLS
Python, C++, DSA, SQL, PowerBI, Tableau, Machine Learning, Deep Learning, TensorFlow, Generative AI, AWS, Cloud Computing, Cyber Security, Networking, HTML, CSS, JavaScript, Java, Data Analysis

PROJECTS
- Weather Web App - 5-day forecast using OpenWeatherMap API
- Osteoporosis Risk Prediction - Image-based prediction using Random Forest
- E-Waste Management System - Responsive web app with tracking
- Asset Management Tool - Web scraping-based automated data extraction

CERTIFICATIONS
AWS Academy Cloud Foundations, AWS Certified Developer - Associate, Multiple CCNA modules, Python for Data Science (edX), NPTEL Cloud Computing, IBM Accelerating Deep Learning with GPUs, AI & ML Virtual Internship
    `.trim();
    const blob = new Blob([resumeContent], {
      type: 'text/plain'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rahul_Singh_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center pt-20 grid-bg particle-bg overflow-hidden">
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
            <p className="font-mono text-lg md:text-2xl text-muted-foreground">
              <TypewriterText texts={roles} speed={80} deleteSpeed={40} pauseDuration={2500} />
            </p>
          </div>

          {/* Summary */}
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in opacity-0" style={{
          animationDelay: '0.8s'
        }}>
            Driven AI & Data Science dcrafting intelligent, scalable solutions with expertise in machine learning, deep learning, and cloud computing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in opacity-0" style={{
          animationDelay: '1s'
        }}>
            <button onClick={handleDownloadResume} className="btn-solid rounded-lg flex items-center gap-3">
              <Download size={20} />
              Download Resume
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
    </section>;
};
export default HeroSection;