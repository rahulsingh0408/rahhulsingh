import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experience = {
    title: 'Software Development Intern',
    company: 'Symbiosis',
    period: 'May 2024 – June 2024',
    location: 'India',
    responsibilities: [
      'Built a robust web scraping application to automate structured data extraction from HTML',
      'Worked on data automation, scraping logic, and clean data pipelines',
      'Implemented efficient data processing workflows for large-scale datasets',
      'Collaborated with team members on optimizing data extraction accuracy',
    ],
    technologies: ['Python', 'Web Scraping', 'Data Automation', 'HTML Parsing'],
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title gradient-text text-center mx-auto block">
            Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className={`relative pl-8 animate-slide-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            {/* Timeline Line */}
            <div className="timeline-line" />

            {/* Experience Card */}
            <div className="glass hover-card rounded-2xl p-6 md:p-8 relative">
              {/* Timeline Dot */}
              <div className="timeline-dot top-8" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-mono text-lg">
                    <Briefcase size={18} />
                    {experience.company}
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-muted-foreground font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    {experience.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {experience.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span className="font-body">{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className={`mt-12 text-center animate-on-scroll ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
            <p className="text-muted-foreground font-body mb-4">
              Looking for new opportunities to grow and contribute
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-primary font-mono hover:text-secondary transition-colors"
            >
              Let's connect →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
