import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Cloud, Network, Code, Brain, Cpu } from 'lucide-react';

const CertificationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const certifications = [
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      icon: <Cloud className="w-6 h-6" />,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30',
    },
    {
      title: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      icon: <Code className="w-6 h-6" />,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
      borderColor: 'border-orange-400/30',
    },
    {
      title: 'Multiple CCNA Modules',
      issuer: 'Cisco',
      icon: <Network className="w-6 h-6" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
    },
    {
      title: 'Python for Data Science',
      issuer: 'edX',
      icon: <Code className="w-6 h-6" />,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30',
    },
    {
      title: 'NPTEL Cloud Computing',
      issuer: 'NPTEL',
      icon: <Cloud className="w-6 h-6" />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
    },
    {
      title: 'Accelerating Deep Learning with GPUs',
      issuer: 'IBM',
      icon: <Cpu className="w-6 h-6" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
    },
    {
      title: 'AI & ML Virtual Internship',
      issuer: 'Industry Certification',
      icon: <Brain className="w-6 h-6" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title gradient-text text-center mx-auto block">
            Certifications
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`glass hover-card rounded-xl p-5 group animate-on-scroll ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.05 + 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-lg ${cert.bgColor} border ${cert.borderColor} flex items-center justify-center flex-shrink-0 ${cert.color}`}
                >
                  {cert.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm font-bold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badge */}
        <div className={`mt-12 flex justify-center animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
          <div className="glass rounded-full px-6 py-3 flex items-center gap-3 neon-border">
            <Award className="text-primary w-6 h-6" />
            <span className="font-mono text-sm text-foreground">
              <span className="text-primary font-bold">7+</span> Industry Certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
